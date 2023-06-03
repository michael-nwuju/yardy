import React from "react";
import Input, { InputProps } from "../Input";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

export interface TextFieldProps extends InputProps {
  name: string;
}

const TextField: React.FC<TextFieldProps> = ({ name, ...props }) => {
  const { values, errors, setFieldTouched, handleChange, touched } =
    useFormikContext();

  return (
    <>
      <Input
        {...props}
        value={(values as any)[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
      />
      <ErrorMessage
        error={(errors as any)[name]}
        touched={(touched as any)[name]}
      />
    </>
  );
};

export default TextField;
