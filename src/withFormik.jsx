import React from 'react';
import { Formik, Form } from 'formik';

const withFormik = (WrappedComponent, initialValues, validationSchema, handleSubmit) => {
  return (props) => (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formikProps => <WrappedComponent {...formikProps} {...props} />}
    </Formik>
  );
};

export default withFormik;
