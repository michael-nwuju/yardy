import { Formik, FormikConfig, FormikValues } from "formik";
import React from "react";

export interface FormProps<T> extends FormikConfig<FormikValues & T> {}

export default function Form<T>({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: FormProps<T>) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}
