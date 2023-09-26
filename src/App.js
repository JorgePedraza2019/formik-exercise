import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: values => {
      let errors = {};
      if (!values.email) errors.emailField = 'Field required';
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email) && values.email) errors.emailField = 'Username should be an email';
      if (!values.password) errors.pswField = 'Field required';
      return errors;
    },
    onSubmit: values => {
      console.log('form values: ', values);
      alert('Login Successful');
    }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          Email
        </div>
        <input
          id='emailField'
          name='email'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.emailField}
        />
        {formik.errors.emailField ?
          <div id='emailError' style={{ color: 'red' }}>
            {formik.errors.emailField}
          </div>
          :
          null
        }
        <div>
          Password
        </div>
        <input
          id='pswField'
          name='password'
          type='password'
          onChange={formik.handleChange}
          value={formik.values.pswField}
        />
        {formik.errors.pswField ?
          <div id='pswError' style={{ color: 'red' }}>
            {formik.errors.pswField}
          </div>
          :
          null
        }
        <button
          id='submitBtn'
          type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
