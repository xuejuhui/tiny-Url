import React from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import { Grid, IconButton, Paper, Typography } from "@material-ui/core";
import DS from "./DroppableSection";

function Groups({ groups, deleteGroup, deleteUrl }) {
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
              <DS
                droppableId={`${group.id}`}
                urls={group.urls}
                deleteUrl={deleteUrl}
              />
            </Grid>
          </Grid>
        );
      })}
    </>
  );
}
export default Groups;
