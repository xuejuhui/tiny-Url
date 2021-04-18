import React from "react";
import { TextField } from "formik-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Field, Form } from "formik";
import { FormGroup } from "@material-ui/core";

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
      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={GroupSchema}
        onSubmit={addGroup}
      >
        <Form className={classes.root}>
          <FormGroup row className={classes.root}>
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
          </FormGroup>
          <FormGroup row className={classes.root}>
            <button type="submit">Submit</button>
          </FormGroup>
        </Form>
      </Formik>
    </>
  );
}

export default GroupForm;
