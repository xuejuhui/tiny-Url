import React, { memo } from "react";

import { Grid } from "@material-ui/core";
import DS from "./DroppableSection";

function Urls({ urls, deleteUrl }) {
  return (
    <>
      <Grid container item xs={12} spacing={1} style={{ margin: "10px 0" }}>
        <Grid item xs={12}>
          <DS droppableId="noGroupUrls" urls={urls} deleteUrl={deleteUrl} />
        </Grid>
      </Grid>
    </>
  );
}
export default memo(Urls);
