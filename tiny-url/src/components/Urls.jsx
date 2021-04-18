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
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

function Urls({ urls, deleteUrl }) {
  return (
    <>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={12}>
          <Droppable droppableId="noGroupUrls">
            {(provided) => {
              return (
                <Paper
                  elevation={3}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {urls.map((url, index) => {
                    return (
                      <List key={url.id} dense={true}>
                        <Draggable
                          key={url.id}
                          draggableId={String(url.id)}
                          index={index}
                        >
                          {(provided) => (
                            <ListItem
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <ListItemAvatar>
                                <Avatar alt={url.fullUrl} src={url.favicons} />
                              </ListItemAvatar>
                              <ListItemText
                                primary={url.shortUrl}
                                secondary={url.fullUrl ? url?.fullUrl : null}
                              />
                              <IconButton aria-label="delete">
                                <DeleteIcon />
                              </IconButton>{" "}
                              <IconButton aria-label="delete">
                                <DeleteIcon />
                              </IconButton>
                              <IconButton
                                aria-label="delete"
                                onClick={() => deleteUrl(url.id)}
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
    </>
  );
}
export default Urls;
