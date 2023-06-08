import React from "react";
import { StyleSheet } from "react-native";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
import { ImagePickerAsset } from "expo-image-picker";

export interface FormImagePickerProps {
  name: string;
}

const FormImagePicker: React.FC<FormImagePickerProps> = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext<any>();

  const handleAdd = (asset: ImagePickerAsset) => {
    setFieldValue(name, [...values[name], asset.uri]);
  };

  const handleRemove = (uri: string) => {
    setFieldValue(
      name,
      (values[name] as string[]).filter(image => image !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        uris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage
        error={errors[name] as string}
        touched={touched[name] as boolean}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default FormImagePicker;
