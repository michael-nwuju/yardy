import React from "react";
import { useFormikContext } from "formik";

import Picker, { PickerProps } from "../Picker";
import ErrorMessage from "./ErrorMessage";
import { PickerItemType } from "../PickerItem";

export interface FormPicker extends PickerProps {
  name: string;
  items: PickerItemType[];
}

const FormPicker: React.FC<FormPicker> = ({
  items,
  name,
  placeholder,
  ...props
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <Picker
        items={items}
        placeholder={placeholder}
        selectedItem={(values as any)[name]}
        onSelectItem={item => setFieldValue(name, item)}
        {...props}
      />
      <ErrorMessage
        error={(errors as any)[name]}
        touched={(touched as any)[name]}
      />
    </>
  );
};

export default FormPicker;
