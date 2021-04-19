import React from "react";
import { TextField } from "formik-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Field, Form } from "formik";
import { FormGroup, Button, Paper, Grid } from "@material-ui/core";

import SaveIcon from "@material-ui/icons/Save";
import * as Yup from "yup";

const GroupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function GroupForm({ addGroup }) {
  const classes = useStyles();

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={6}>
          <Formik
            initialValues={{
              name: "",
            }}
            validationSchema={GroupSchema}
            onSubmit={addGroup}
          >
            <Paper elevation={3} style={{ minWidth: "240px" }}>
              <Form className={classes.root} style={{ padding: ".5em" }}>
                <Field
                  component={TextField}
                  name="name"
                  type="text"
                  label="Group Name"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  endIcon={<SaveIcon />}
                >
                  Submit
                </Button>
              </Form>
            </Paper>
          </Formik>
        </Grid>
      </Grid>
    </>
  );
}

export default GroupForm;
