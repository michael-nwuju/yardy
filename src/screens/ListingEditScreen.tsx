import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import { Form, TextField, FormPicker, SubmitButton } from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import { PickerItemType } from "../components/PickerItem";
import { IconName } from "../types/icon.type";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const init = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

const categories: PickerItemType[] = init.map(category => ({
  label: category.label,
  value: category.value,
  icon: {
    name: category.icon as IconName,
    backgroundColor: category.backgroundColor,
  },
}));

function ListingEditScreen() {
  return (
    <View style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <TextField maxLength={255} name="title" placeholder="Title" />
        <TextField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          style={styles.price}
        />
        <FormPicker
          items={categories}
          name="category"
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
          numColumns={3}
        />
        <TextField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  price: { width: 120 },
});

export default ListingEditScreen;
