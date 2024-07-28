import React, { useState } from 'react';
import { Field, ErrorMessage, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import withFormik from './withFormik'; // Import the HOC
import * as Yup from 'yup';

const LoginForm = ({ isSignUp, switchToSignUp, switchToLogin, handleSubmit, handleChange, values, errors, touched }) => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md relative">
        <h1 className="text-2xl font-semibold text-blue-700">{isSignUp ? 'Sign Up' : 'Login'}</h1>

        <Formik
          initialValues={values}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <Field
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <ErrorMessage name="username" component="div" className="mt-2 text-sm text-red-600" />
              </div>
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <ErrorMessage name="password" component="div" className="mt-2 text-sm text-red-600" />
              </div>
              {isSignUp && (
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <ErrorMessage name="email" component="div" className="mt-2 text-sm text-red-600" />
                </div>
              )}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {isSignUp ? 'Sign Up' : 'Log In'}
              </button>
              <p className="text-sm text-center text-blue-600">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                  type="button"
                  onClick={isSignUp ? switchToLogin : switchToSignUp}
                  className="underline"
                >
                  {isSignUp ? 'Log in' : 'Sign Up'}
                </button>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

// Define initial values, validation schema, and submit handler
const initialValues = {
  username: '',
  password: '',
  email: '' // Include email for SignUp
};

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
  email: Yup.string().email('Invalid email format').when('isSignUp', {
    is: true,
    then: Yup.string().required('Email is required')
  })
});

const handleSubmit = async (values) => {
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`${values.email ? 'Sign-up' : 'Login'} data`, values);
    // Handle sign-up or login action here
  } catch (error) {
    console.error(`${values.email ? 'Sign-up' : 'Login'} failed:`, error);
  }
};

// Wrap LoginForm with withFormik HOC
const EnhancedLoginForm = withFormik(LoginForm, initialValues, validationSchema, handleSubmit);

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const switchToSignUp = () => setIsSignUp(true);
  const switchToLogin = () => setIsSignUp(false);

  return (
    <EnhancedLoginForm
      isSignUp={isSignUp}
      switchToSignUp={switchToSignUp}
      switchToLogin={switchToLogin}
    />
  );
};

export default Login;
