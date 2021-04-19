import { Grid } from "@material-ui/core";

import React, { useEffect, useState } from "react";
import Urls from "./Urls";
import Group from "./Groups";
import { DragDropContext } from "react-beautiful-dnd";
import UrlForm from "./UrlForm";
import GroupForm from "./GroupForm";

import {
  getNoGroupUrls,
  addNewUrl,
  deleteUrlById,
  patchUrl,
} from "../api/urlRequest";
import {
  getGroupUrls,
  addNewGroup,
  deleteGroupById,
} from "../api/groupRequest";

function MainDisplay() {
  const [groupOfUrls, setGroupOfUrls] = useState({ urls: [], groups: [] });

  useEffect(() => {
    const getUrls = async () => {
      try {
        const urls = await getNoGroupUrls();
        setGroupOfUrls((prev) => {
          return { ...prev, urls };
        });
      } catch (error) {
        console.log(error);
      }
    };
    getUrls();
  }, []);

  useEffect(() => {
    const getGroup = async () => {
      try {
        const groups = await getGroupUrls();
        setGroupOfUrls((prev) => {
          return { ...prev, groups };
        });
      } catch (error) {
        console.log(error);
      }
    };
    getGroup();
  }, []);

  const addUrl = async (
    { shortUrl, alias, ...rest },
    { setSubmitting, setErrors, resetForm }
  ) => {
    try {
      const fields = { ...rest };
      if (shortUrl) {
        fields.shortUrl = shortUrl;
      }
      if (alias) {
        fields.alias = alias;
      }
      const newUrl = await addNewUrl(fields);
      resetForm({});
      setGroupOfUrls((prev) => {
        return { ...prev, urls: [...prev.urls, newUrl] };
      });
    } catch (error) {
      console.log(error, error.message);
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };

  const addGroup = async (values, { setSubmitting, setErrors, resetForm }) => {
    try {
      const data = await addNewGroup(values);
      resetForm({});
      setGroupOfUrls((prev) => {
        return { ...prev, groups: [...prev.groups, { ...data, urls: [] }] };
      });
    } catch (error) {
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };

  const deleteGroup = async (id) => {
    try {
      const data = deleteGroupById(id);
      if (data) {
        const deletedGroup = groupOfUrls.groups?.find(
          (group) => group.id === Number(id)
        );

        setGroupOfUrls((prev) => {
          return {
            ...prev,
            groups: [...prev.groups].filter((group) => {
              return group.id !== id;
            }),
            urls: [...prev.urls, ...deletedGroup.urls],
          };
        });

        // setGroups((prev) =>
        //   [...prev]?.filter((group) => {
        //     return group.id !== id;
        //   })
        // );
        // setUrls((prev) => [...prev, ...deletedGroup.urls]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUrl = async (id, groupId = null) => {
    try {
      const data = await deleteUrlById(id);
      if (data) {
        if (!groupId) {
          const newUrls = groupOfUrls.urls.filter((url) => url.id !== id);
          setGroupOfUrls((prev) => {
            return { ...prev, urls: newUrls };
          });
        } else {
          const groupIndex = groupOfUrls.groups?.findIndex((group) => {
            return group.id === groupId;
          });
          const newGroup = [...groupOfUrls?.groups];
          const newUrls = newGroup[groupIndex].urls?.filter(
            (url) => url.id !== id
          );
          newGroup[groupIndex].urls = newUrls;
          setGroupOfUrls((prev) => {
            return { ...prev, groups: newGroup };
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const findArray = (id) => {
    let array;
    if (id !== "noGroupUrls") {
      const group = groupOfUrls.groups.find((group) => group.id === Number(id));
      array = group.urls;
    } else {
      array = groupOfUrls.urls;
    }
    return [...array];
  };

  const updateUrlGroup = async (urlId, groupId) => {
    const formatGroupId = groupId === "noGroupUrls" ? null : groupId;
    await patchUrl(urlId, { groupId: formatGroupId });
  };
  const onDragEnd = async (result) => {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const sourceArray = findArray(source.droppableId);
      const [removed] = sourceArray.splice(source.index, 1);
      sourceArray.splice(destination.index, 0, removed);
      if (source.droppableId === "noGroupUrls") {
        setGroupOfUrls((prev) => {
          return { ...prev, urls: sourceArray };
        });
      }
      if (source.droppableId !== "noGroupUrls") {
        setGroupOfUrls((prev) => {
          const newGroups = [...prev.groups];
          const groupIndex = newGroups.findIndex((group) => {
            return group.id === Number(source.droppableId);
          });
          newGroups[groupIndex] = {
            ...newGroups[groupIndex],
            urls: sourceArray,
          };
          return { ...prev, groups: newGroups };
        });
      }
    } else {
      const sourceArray = findArray(source.droppableId);
      const destinationArray = findArray(destination.droppableId);
      const [removed] = sourceArray.splice(source.index, 1);

      destinationArray.splice(destination.index, 0, removed);

      if (source.droppableId === "noGroupUrls") {
        setGroupOfUrls((prev) => {
          const newGroups = [...prev.groups];

          const groupIndex = newGroups.findIndex(
            (group) => group.id === Number(destination.droppableId)
          );
          newGroups[groupIndex] = {
            ...newGroups[groupIndex],
            urls: destinationArray,
          };
          return { urls: sourceArray, groups: newGroups };
        });
      }
      if (source.droppableId !== "noGroupUrls") {
        setGroupOfUrls((prev) => {
          const newGroups = [...prev.groups];
          let newUrls = [...prev.urls];

          const sourceIndex = newGroups.findIndex(
            (group) => group.id === Number(source.droppableId)
          );
          const desinationIndex = newGroups.findIndex(
            (group) => group.id === Number(destination.droppableId)
          );
          newGroups[sourceIndex] = {
            ...newGroups[sourceIndex],
            urls: sourceArray,
          };
          if (desinationIndex !== -1) {
            newGroups[desinationIndex] = {
              ...newGroups[desinationIndex],
              urls: destinationArray,
            };
          } else {
            newUrls = destinationArray;
          }
          return { urls: newUrls, groups: newGroups };
        });
      }
      await updateUrlGroup(removed.id, destination.droppableId);
    }
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid container item md={12} lg={4} spacing={2}>
          <Grid item xs={12} sm={6} lg={12}>
            <UrlForm addUrl={addUrl} />
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <GroupForm addGroup={addGroup} />
          </Grid>
        </Grid>

        <Grid
          item
          md={12}
          lg={8}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <DragDropContext onDragEnd={onDragEnd}>
            <Grid
              container
              item
              xs={6}
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Urls urls={groupOfUrls.urls} deleteUrl={deleteUrl} />
            </Grid>

            <Grid
              container
              item
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Group
                groups={groupOfUrls.groups}
                deleteGroup={deleteGroup}
                deleteUrl={deleteUrl}
              />
            </Grid>
          </DragDropContext>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainDisplay;
