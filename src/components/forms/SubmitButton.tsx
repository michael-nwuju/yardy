import React from "react";
import Button, { ButtonProps } from "../Button";
import { useFormikContext } from "formik";

const SubmitButton: React.FC<ButtonProps> = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <Button title={title} onPress={handleSubmit as any} />;
};

export default SubmitButton;
