import React from "react";
import * as Yup from "yup";
import { Alert, Keyboard } from "react-native";
import * as Notifications from "expo-notifications";

import { Form, SubmitButton, TextField } from "./forms";
import * as messagesApi from "../api/messages";

export interface ContactSellerFormProps {
  listing: any;
}

const ContactSellerForm: React.FC<ContactSellerFormProps> = ({ listing }) => {
  return (
    <Form
      initialValues={{ message: "" }}
      onSubmit={async ({ message }, { resetForm }) => {
        Keyboard.dismiss();

        const result = await messagesApi.send({
          message,
          listingId: listing?.id,
        });

        if (!result?.ok) {
          console.log("Error", result);
          return Alert.alert(
            "Error",
            "Could not send the message to the seller."
          );
        }

        resetForm();

        Notifications.scheduleNotificationAsync({
          content: {
            title: "Awesome!",
            body: "Your message was sent to the seller.",
          },
          trigger: null,
        });
      }}
      validationSchema={Yup.object().shape({
        message: Yup.string().required().min(1).label("Message"),
      })}
    >
      <TextField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <SubmitButton title="Contact Seller" />
    </Form>
  );
};

export default ContactSellerForm;
