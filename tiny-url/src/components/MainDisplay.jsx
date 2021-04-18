import { Grid } from "@material-ui/core";
import axios from "axios";

import React, { useEffect, useState } from "react";
import Urls from "./Urls";
import Group from "./Groups";
import { DragDropContext } from "react-beautiful-dnd";
import UrlForm from "./UrlForm";
import GroupForm from "./GroupForm";

function MainDisplay() {
  const [urls, setUrls] = useState([]);
  const [groups, setGroups] = useState([]);
  console.log(urls);
  useEffect(() => {
    axios
      .get("/api/urls")
      .then(async ({ data }) => {
        const newData = data.map((url) => {
          return {
            ...url,
            favicons: `https://www.google.com/s2/favicons?sz=32&domain_url=${url.fullUrl}`,
          };
        });
        setUrls(newData);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/api/groups")
      .then(({ data }) => {
        const newData = data.map((group) => {
          const newUrls = group.urls?.map((url) => {
            return {
              ...url,
              favicons: `https://www.google.com/s2/favicons?sz=32&domain_url=${url.fullUrl}`,
            };
          });
          return { ...group, urls: newUrls };
        });
        setGroups(newData);
      })
      .catch((err) => console.log(err));
  }, []);

  const addUrl = async (values) => {
    try {
      const { data } = await axios.post("/api/urls", { ...values });
      setUrls((prev) => [
        ...prev,
        {
          ...data,
          favicons: `https://www.google.com/s2/favicons?sz=32&domain_url=${data.fullUrl}`,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const addGroup = async (values) => {
    try {
      const { data } = await axios.post("/api/groups", { ...values });
      setGroups((prev) => [...prev, { ...data, urls: [] }]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGroup = async (id) => {
    try {
      const { data } = await axios.delete(`/api/groups/${id}`);
      if (data) {
        const deletedGroup = groups.find((group) => group.id == id);
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
      const { data } = await axios.delete(`/api/urls/${id}`);
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
      const group = groups.find((group) => group.id == id);
      array = group.urls;
    } else {
      array = urls;
    }
    return [...array];
  };

  const updateUrl = async (urlId, groupId) => {
    await axios.patch(`/api/urls/${urlId}`, { groupId });
  };
  console.log(groups);
  const onDragEnd = async (result) => {
    const { source, destination } = result;
    console.log(source, destination);
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
        const newGroups = [...groups];
        const groupIndex = newGroups.findIndex((group) => {
          console.log(group.id, source.droppableId);
          return group.id == source.droppableId;
        });
        newGroups[groupIndex] = { ...newGroups[groupIndex], urls: sourceArray };
        setGroups(newGroups);
      }
    } else {
      const sourceArray = findArray(source.droppableId);
      const destinationArray = findArray(destination.droppableId);
      const [removed] = sourceArray.splice(source.index, 1);
      console.log(removed);
      await updateUrl(removed.id, destination.droppableId);

      destinationArray.splice(destination.index, 0, removed);
      if (source.droppableId === "noGroupUrls") setUrls(sourceArray);
      if (destination.droppableId === "noGroupUrls") setUrls(destinationArray);
      if (source.droppableId !== "noGroupUrls") {
        setGroups((prevGroup) => {
          const newGroups = [...prevGroup];

          const groupIndex = newGroups.findIndex(
            (group) => group.id == source.droppableId
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
            (group) => group.id == destination.droppableId
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
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={6}>
        <UrlForm addUrl={addUrl} />
        <GroupForm addGroup={addGroup} />
      </Grid>

      <Grid
        item
        xs={6}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <DragDropContext onDragEnd={onDragEnd}>
          <Grid item xs={6}>
            <Urls urls={urls} deleteUrl={deleteUrl} />
          </Grid>
          <Grid item xs={6}>
            <Group
              groups={groups}
              deleteGroup={deleteGroup}
              deleteUrl={deleteUrl}
            />
          </Grid>
        </DragDropContext>
      </Grid>
    </Grid>
  );
}

export default MainDisplay;
