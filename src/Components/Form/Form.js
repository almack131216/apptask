import React from "react";
import { Form, Field } from "react-final-form";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const showResults = async values => {
  await sleep(500);
  window.alert(JSON.stringify(values, undefined, 2));
};
const required = value => (value ? undefined : "Required");

const finalForm = () => (
  <div>
    <Form onSubmit={showResults}>
      {({ handleSubmit, values, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Field name="firstName" placeholder="First name" validate={required}>
            {({ input, meta, placeholder }) => (
              <div className={meta.active ? "active" : ""}>
                <label>First Name</label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field name="lastName" placeholder="Last name" validate={required}>
            {({ input, meta, placeholder }) => (
              <div className={meta.active ? "active" : ""}>
                <label>Last Name</label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field name="email" placeholder="Email" validate={required}>
            {({ input, meta, placeholder }) => (
              <div className={meta.active ? "active" : ""}>
                <label>Email</label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <pre>{JSON.stringify(values, undefined, 2)}</pre>
        </form>
      )}
    </Form>
  </div>
);

export default finalForm;
