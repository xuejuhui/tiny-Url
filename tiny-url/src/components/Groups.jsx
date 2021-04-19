import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useHistory } from "react-router-dom";

import DeleteIcon from "@material-ui/icons/Delete";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
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
  Tooltip,
} from "@material-ui/core";

function Groups({ groups, deleteGroup, deleteUrl }) {
  const history = useHistory();
  const copiedToClipboard = (shortURL) => {
    navigator.clipboard.writeText(`${window.location.host}/${shortURL}`);
  };
  const goesTo = (shortURL) => {
    history.push({ pathname: shortURL });
  };
  console.log();
  return (
    <>
      {groups.map((group) => {
        return (
          <Grid container item xs={12} md={6} key={group.id} spacing={1}>
            <Grid item xs={12}>
              <Paper elevation={3}>
                <Typography variant="body1">
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
                                    primary={link.alias || link.shortUrl}
                                    secondary={link.fullUrl || null}
                                  />
                                  <ListItemText
                                    primary="Redirected"
                                    secondary={link.counter}
                                  />
                                  <Tooltip title="Go To">
                                    <IconButton
                                      aria-label="redirect"
                                      onClick={() => goesTo(link?.shortUrl)}
                                    >
                                      <ExitToAppIcon />
                                    </IconButton>
                                  </Tooltip>

                                  <Tooltip title="copy">
                                    <IconButton
                                      aria-label="copy"
                                      onClick={() =>
                                        copiedToClipboard(link?.shortUrl)
                                      }
                                    >
                                      <FileCopyIcon />
                                    </IconButton>
                                  </Tooltip>
                                  <Tooltip title="delete">
                                    <IconButton
                                      aria-label="delete"
                                      onClick={() =>
                                        deleteUrl(link.id, group.id)
                                      }
                                    >
                                      <DeleteIcon />
                                    </IconButton>
                                  </Tooltip>
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
