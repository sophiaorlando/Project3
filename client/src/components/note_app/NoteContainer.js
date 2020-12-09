import React from "react";
import { Grid, Card } from "@material-ui/core";
import NotePad from "./Editor";

const NoteContainer = (props) => {
  return (
    <Grid
      elevation={5}
      component={Card}
      item
      container
      direction="column"
      xs={12}
      md={5}
      style={{ maxHeight: "100%", padding: "10px", zIndex: "-10" }}
    >
      <Grid item xs={12} style={{ padding: "10px", zIndex: "-10"  }}>
        <NotePad {...props} handleSave={(note) => props.handleSave(note)} />
      </Grid>
    </Grid>
  );
};

export default NoteContainer;
