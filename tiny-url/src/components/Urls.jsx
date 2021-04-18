import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Grid from "@material-ui/core/Grid";

import { Droppable, Draggable } from "react-beautiful-dnd";

function Urls({ urls, deleteUrl }) {
  return (
    <div>
      <Grid item xs={12} md={6}>
        <div>
          <Droppable droppableId="noGroupUrls">
            {(provided) => {
              return (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{ minHeight: "250px", background: "green" }}
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
                              <img src={url.favicons} alt="ss" />

                              <ListItemText
                                primary={url.shortUrl}
                                secondary={url.fullUrl ? url?.fullUrl : null}
                              />
                              <button onClick={() => deleteUrl(url.id)}>
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
    </div>
  );
}
export default Urls;
