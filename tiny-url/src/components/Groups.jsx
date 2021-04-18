import React, { useEffect, useState } from "react";

import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { Redirect } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { Droppable, Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const colors = ["#ff0000", "#00ff00", "#0000ff"];

function Groups({ groups, deleteGroup, deleteUrl }) {
  const classes = useStyles();

  return (
    <div>
      {groups.map((group) => {
        return (
          <Grid item xs={12} md={6} key={group.id}>
            <Typography variant="h6" className={classes.title}>
              {group.name}
              {group.id}
            </Typography>
            <button onClick={() => deleteGroup(group.id)}>X</button>
            <div className={classes.demo}>
              <Droppable droppableId={`${group.id}`}>
                {(provided) => {
                  const random_color =
                    colors[Math.floor(Math.random() * colors.length)];
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{ minHeight: "250px", background: random_color }}
                    >
                      {group.urls?.map((link, index) => {
                        return (
                          <List key={link.id} dense={true}>
                            <Draggable
                              key={link.id}
                              draggableId={String(link.id)}
                              index={index}
                            >
                              {(provided) => (
                                <ListItem
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <img src={link.favicons} alt="ss" />

                                  <ListItemText
                                    primary={link.shortUrl}
                                    secondary={
                                      link.fullUrl ? link?.fullUrl : null
                                    }
                                  />
                                  <button
                                    onClick={() => deleteUrl(link.id, group.id)}
                                  >
                                    X
                                  </button>
                                </ListItem>
                              )}
                            </Draggable>
                          </List>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          </Grid>
        );
      })}
    </div>
  );
}
export default Groups;
