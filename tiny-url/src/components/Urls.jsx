import React, { memo } from "react";
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
  ListItemAvatar,
  Avatar,
  Tooltip,
} from "@material-ui/core";

function Urls({ urls, deleteUrl }) {
  const history = useHistory();

  const copiedToClipboard = (shortURL) => {
    navigator.clipboard.writeText(`${window.location.host}/${shortURL}`);
  };
  const goesTo = (shortURL) => {
    history.push({ pathname: shortURL });
  };
  return (
    <>
      <Grid container item xs={12} spacing={1} style={{ margin: "10px 0" }}>
        <Grid item xs={12}>
          <Droppable droppableId="noGroupUrls">
            {(provided) => {
              return (
                <Paper
                  elevation={3}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{ minHeight: "250px" }}
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
                                primary={url.alias || url.shortUrl}
                                secondary={url.fullUrl || null}
                              />
                              <ListItemText
                                primary="Redirected"
                                secondary={url.counter}
                              />

                              <Tooltip title="Go To">
                                <IconButton
                                  aria-label="redirect"
                                  onClick={() => goesTo(url?.shortUrl)}
                                >
                                  <ExitToAppIcon />
                                </IconButton>
                              </Tooltip>

                              <Tooltip title="copy">
                                <IconButton
                                  aria-label="copy"
                                  onClick={() =>
                                    copiedToClipboard(url?.shortUrl)
                                  }
                                >
                                  <FileCopyIcon />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="delete">
                                <IconButton
                                  aria-label="delete"
                                  onClick={() => deleteUrl(url.id)}
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
    </>
  );
}
export default memo(Urls);
