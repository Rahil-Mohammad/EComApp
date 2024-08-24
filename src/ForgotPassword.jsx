import React from 'react';
import { Link } from 'react-router-dom';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Button from './Button';
import Input from './Input';

// API call placeholder
const callLoginApi = (values) => {
  console.log("callLoginApi called");
  console.log("sending data ", values.email);
};

// Validation schema
const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
});

// Initial form values
const initialValues = {
  email: '',
};

// Formik-enhanced component
function ForgotPassword({
  handleChange,
  values,
  handleSubmit,
  handleBlur,
  errors,
  touched,
  isValid,
  dirty,
}) {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-96 p-5 rounded-md shadow-md bg-white"
      >
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">
          Forgot Your Password
        </h1>

        <Input
          id="email"
          type="email"
          name="email"
          label="Your Email Address"
          required
          values={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.email}
          touched={touched.email}
          autoComplete="email"
          placeholder="Your Email Address"
          className="py-2"
        />

        <Button
          type="submit"
          className="my-3 py-2"
          disabled={!dirty || !isValid}
        >
          Request Password Reset
        </Button>

        <p className="self-center text-gray-700">
          Back to
          <Link to="/login">
            <span className="text-primary-dark font-bold"> Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
}

// Enhance component with Formik
const EnhancedForgotPassword = withFormik({
  mapPropsToValues: () => initialValues,
  validationSchema: schema,
  handleSubmit: callLoginApi,
})(ForgotPassword);

export default EnhancedForgotPassword;
