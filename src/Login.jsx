import React, { useState } from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import withPopup from './withPopup'; // Import the HOC

const LoginForm = ({ isSignUp, switchToSignUp, switchToLogin, showPopup }) => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    console.log('Form Submitted', values);
    try {
      const endpoint = isSignUp ? 'https://myeasykart.codeyogi.io/signup' : 'https://myeasykart.codeyogi.io/login';
      const response = await axios.post(endpoint, values);

      console.log('Response', response);

      if (response.data.token) {
        localStorage.setItem('jwtToken', response.data.token);
        navigate('/dashboard'); // Redirect to dashboard
      }
    } catch (error) {
      console.log('Error', error.response);
      if (error.response && error.response.data && error.response.data.errors) {
        const errorMessages = error.response.data.errors.map(err => `${err.field}: ${err.message}`).join(', ');
        setErrors({ apiError: errorMessages });
        showPopup('Invalid credentials provided'); // Show popup notification
      } else if (error.response && error.response.data && error.response.data.message) {
        setErrors({ apiError: error.response.data.message });
        showPopup('Invalid credentials provided'); // Show popup notification
      } else {
        setErrors({ apiError: 'An unexpected error occurred' });
        showPopup('An unexpected error occurred'); // Show popup notification
      }
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    fullName: isSignUp ? Yup.string().required('Full Name is required') : Yup.string().nullable(),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md relative">
        <h1 className="text-2xl font-semibold text-blue-700">{isSignUp ? 'Sign Up' : 'Login'}</h1>

        <Formik
          initialValues={{ fullName: isSignUp ? '' : undefined, email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              {isSignUp && (
                <div>
                  <Field
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <ErrorMessage name="fullName" component="div" className="mt-2 text-sm text-red-600" />
                </div>
              )}
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <ErrorMessage name="email" component="div" className="mt-2 text-sm text-red-600" />
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
              {errors.apiError && <div className="text-red-500 mt-2">{errors.apiError}</div>}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {isSignUp ? 'Sign Up' : 'Log In'}
              </button>
              <p className="text-sm text-center text-blue-600 mt-2">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                  type="button"
                  onClick={isSignUp ? switchToLogin : switchToSignUp}
                  className="underline"
                >
                  {isSignUp ? 'Log in' : 'Sign Up'}
                </button>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const EnhancedLoginForm = withPopup(LoginForm);

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
