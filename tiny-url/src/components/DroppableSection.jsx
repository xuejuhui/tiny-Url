import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

import DeleteIcon from "@material-ui/icons/Delete";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  IconButton,
  ListItemText,
  ListItem,
  List,
  Paper,
  ListItemAvatar,
  Avatar,
  Tooltip,
  Typography,
} from "@material-ui/core";

function DroppableSection({ droppableId, urls, deleteUrl }) {
  const copiedToClipboard = (shortURL) => {
    navigator.clipboard.writeText(`${window.location.host}/${shortURL}`);
  };
  const goesTo = (shortURL) => {
    const win = window.open(shortURL, "_blank");
    win.focus();
  };

  return (
    <Droppable droppableId={droppableId}>
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
                          secondary={
                            <>
                              <Typography component="span" variant="body1">
                                {url.fullUrl || null}
                              </Typography>
                              <br />
                              <Typography component="span" variant="caption">
                                {`Redirected: ${url.counter}`}
                              </Typography>
                            </>
                          }
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
                            onClick={() => copiedToClipboard(url?.shortUrl)}
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
  );
}

export default DroppableSection;
