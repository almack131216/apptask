import React from "react";
import { Form, Field, FormSpy } from "react-final-form";
import RenderCount from "../../Components/RenderCount/RenderCount";
//REF: https://www.youtube.com/watch?v=WoSzy-4mviQ

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const showResults = async values => {
  await sleep(500);
  window.alert(JSON.stringify(values, undefined, 2));
};
const required = value => (value ? undefined : "Required");

const finalForm = () => (
  <div>
    <Form
      onSubmit={showResults}
      subscription={{
        submitting: true
      }}
    >
      {({ handleSubmit, values, submitting }) => (
        <form onSubmit={handleSubmit}>
          <RenderCount />
          <Field
            name="firstName"
            placeholder="First name"
            validate={required}
            subscription={{
              value: true,
              active: true,
              error: true,
              touched: true
            }}
          >
            {({ input, meta, placeholder }) => (
              <div className={meta.active ? "active" : ""}>
                <RenderCount />
                <label>First Name</label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field
            name="lastName"
            placeholder="Last name"
            validate={required}
            subscription={{
              value: true,
              active: true,
              error: true,
              touched: true
            }}
          >
            {({ input, meta, placeholder }) => (
              <div className={meta.active ? "active" : ""}>
                <RenderCount />
                <label>Last Name</label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field
            name="email"
            placeholder="Email"
            validate={required}
            subscription={{
              value: true,
              active: true,
              error: true,
              touched: true
            }}
          >
            {({ input, meta, placeholder }) => (
              <div className={meta.active ? "active" : ""}>
                <RenderCount />
                <label>Email</label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <FormSpy subscription={{ values: true }}>
            {({ values }) => (
              <pre>
                <RenderCount />
                {JSON.stringify(values, undefined, 2)}
              </pre>
            )}
          </FormSpy>
        </form>
      )}
    </Form>
  </div>
);

export default finalForm;
