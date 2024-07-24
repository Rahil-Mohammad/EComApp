import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = ({ onLogin }) => {
  const initialValues = {
    username: '',
    password: ''
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  });

  const onSubmit = (values) => {
    onLogin(values); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
        <div className="flex justify-center">
          <div className="text-2xl font-semibold text-blue-700">Login</div>
        </div>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form className="space-y-6">
            <div>
              <Field
                type="text"
                name="username"
                placeholder="USERNAME"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <ErrorMessage name="username" component="div" className="mt-2 text-sm text-red-600" />
            </div>
            <div>
              <Field
                type="password"
                name="password"
                placeholder="PASSWORD"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <ErrorMessage name="password" component="div" className="mt-2 text-sm text-red-600" />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              LOGIN
            </button>
            <div className="text-center">
              <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password? 
              </a>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;

//this is login page
