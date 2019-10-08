import { withFormik, Form, Field } from "formik";
import React from "react";
import { axiosWithAuth } from "./axiosWithAuth";

const NewFriend = props => {
  return (
    <Form className="friendForm">
      Add Friend
      <div>
        <div>
          <label>Name</label>
          <Field type="text" name="name" />
        </div>
        <div>
          <label>Age</label>
          <Field type="text" name="age" />
        </div>
        <div />
        <label>Email</label>
        <Field type="email" name="email" />
      </div>
      <button type="submit">Submit</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues({ name, age, email }) {
    return {
      name: name || "",
      age: age || "",
      email: email || ""
    };
  },
  
  handleSubmit(values, { resetForm, setErrors, setSubmitting, props }) {
    if (values.email === "carl.stanley100@gmail.com") {
      setErrors({ email: "That email already exists" });
    } else {
      axiosWithAuth()
        .post("http://localhost:5000/api/friends", values)
        .then(res => {
          props.setFriends(res.data);
        });
    }
  }
})(NewFriend);