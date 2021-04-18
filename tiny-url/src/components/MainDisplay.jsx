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
  const [urls, setUrls] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const getUrls = async () => {
      try {
        const urls = await getNoGroupUrls();
        setUrls(urls);
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
        setGroups(groups);
      } catch (error) {
        console.log(error);
      }
    };
    getGroup();
  }, []);

  const addUrl = async (values) => {
    try {
      const newUrl = await addNewUrl(values);
      setUrls((prev) => [...prev, newUrl]);
    } catch (error) {
      console.log(error);
    }
  };

  const addGroup = async (values) => {
    try {
      const data = await addNewGroup(values);
      setGroups((prev) => [...prev, { ...data, urls: [] }]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGroup = async (id) => {
    try {
      const data = deleteGroupById(id);
      if (data) {
        const deletedGroup = groups.find((group) => group.id === Number(id));
        setGroups((prev) =>
          [...prev]?.filter((group) => {
            return group.id !== id;
          })
        );
        setUrls((prev) => [...prev, ...deletedGroup.urls]);
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
          const newUrls = urls.filter((url) => url.id !== id);
          setUrls(newUrls);
        } else {
          const groupIndex = groups.findIndex((group) => {
            return group.id === groupId;
          });
          const newGroup = [...groups];
          const newUrls = newGroup[groupIndex].urls?.filter(
            (url) => url.id !== id
          );
          newGroup[groupIndex].urls = newUrls;
          setGroups(newGroup);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const findArray = (id) => {
    let array;
    if (id !== "noGroupUrls") {
      const group = groups.find((group) => group.id === Number(id));
      array = group.urls;
    } else {
      array = urls;
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
      if (source.droppableId === "noGroupUrls") setUrls(sourceArray);
      if (source.droppableId !== "noGroupUrls") {
        console.log(source.droppableId);
        const newGroups = [...groups];
        const groupIndex = newGroups.findIndex((group) => {
          return group.id === Number(source.droppableId);
        });
        newGroups[groupIndex] = { ...newGroups[groupIndex], urls: sourceArray };
        setGroups(newGroups);
      }
    } else {
      const sourceArray = findArray(source.droppableId);
      const destinationArray = findArray(destination.droppableId);
      const [removed] = sourceArray.splice(source.index, 1);
      await updateUrlGroup(removed.id, destination.droppableId);

      destinationArray.splice(destination.index, 0, removed);
      if (source.droppableId === "noGroupUrls") setUrls(sourceArray);
      if (destination.droppableId === "noGroupUrls") setUrls(destinationArray);
      if (source.droppableId !== "noGroupUrls") {
        setGroups((prevGroup) => {
          const newGroups = [...prevGroup];
          console.log(typeof source.droppableId);

          const groupIndex = newGroups.findIndex(
            (group) => group.id === Number(source.droppableId)
          );
          newGroups[groupIndex] = {
            ...newGroups[groupIndex],
            urls: sourceArray,
          };
          return newGroups;
        });
      }
      if (destination.droppableId !== "noGroupUrls") {
        setGroups((prevGroup) => {
          const newGroups = [...prevGroup];

          const groupIndex = newGroups.findIndex(
            (group) => group.id === Number(destination.droppableId)
          );
          newGroups[groupIndex] = {
            ...newGroups[groupIndex],
            urls: destinationArray,
          };
          return newGroups;
        });
      }
    }
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={4}>
          <UrlForm addUrl={addUrl} />
          <GroupForm addGroup={addGroup} />
        </Grid>

        <Grid
          item
          xs={8}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <DragDropContext onDragEnd={onDragEnd}>
            <Grid
              container
              item
              xs={12}
              md={4}
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Urls urls={urls} deleteUrl={deleteUrl} />
            </Grid>

            <Grid
              container
              item
              xs={12}
              md={8}
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Group
                groups={groups}
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
