import React from "react";
import { TextField } from "formik-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import { FormGroup } from "@material-ui/core";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const UrlSchema = Yup.object().shape({
  fullUrl: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    )
    .required("Required"),
  shortUrl: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  alias: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function UrlForm({ addUrl }) {
  const classes = useStyles();

  return (
    <>
      <Formik
        initialValues={{
          fullUrl: "",
          shortUrl: "",
          alias: "",
        }}
        validationSchema={UrlSchema}
        onSubmit={addUrl}
      >
        <Form className={classes.root}>
          <FormGroup row className={classes.root}>
            <Field
              component={TextField}
              name="fullUrl"
              type="text"
              label="Full Url"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Field
              component={TextField}
              name="shortUrl"
              type="text"
              label="Short Url"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <Field
              component={TextField}
              name="alias"
              type="text"
              label="Alias"
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

export default UrlForm;
