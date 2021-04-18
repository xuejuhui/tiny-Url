import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

import DeleteIcon from "@material-ui/icons/Delete";
import {
  Grid,
  IconButton,
  ListItemText,
  ListItem,
  List,
  Paper,
  Typography,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

function Groups({ groups, deleteGroup, deleteUrl }) {
  return (
    <>
      {groups.map((group) => {
        return (
          <Grid container item xs={12} md={6} key={group.id} spacing={1}>
            <Grid item xs={12}>
              <Paper elevation={3}>
                <Typography variant="body">
                  {group.name}
                  {group.id}
                </Typography>

                <IconButton
                  aria-label="delete"
                  onClick={() => deleteGroup(group.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Droppable droppableId={`${group.id}`}>
                {(provided) => {
                  return (
                    <Paper
                      elevation={3}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{ minHeight: "250px" }}
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
                                  <ListItemAvatar>
                                    <Avatar
                                      alt={link.fullUrl}
                                      src={link.favicons}
                                    />
                                  </ListItemAvatar>

                                  <ListItemText
                                    primary={link.shortUrl}
                                    secondary={
                                      link.fullUrl ? link?.fullUrl : null
                                    }
                                  />
                                  <IconButton
                                    aria-label="delete"
                                    onClick={() => deleteUrl(link.id, group.id)}
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                </ListItem>
                              )}
                            </Draggable>
                          </List>
                        );
                      })}
                      {provided.placeholder}
                    </Paper>
                  );
                }}
              </Droppable>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
}
export default Groups;
