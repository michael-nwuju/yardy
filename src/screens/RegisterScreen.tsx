import React from "react";
import { View, StyleSheet, Image } from "react-native";
import * as yup from "yup";

import Screen from "../components/Screen";
import { Form, SubmitButton, TextField } from "../components/forms";

export interface RegisterScreenProps {}

const RegisterScreen: React.FC<RegisterScreenProps> = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Form
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={yup.object().shape({
            name: yup.string().required().label("Name"),
            email: yup.string().required().email().label("Email"),
            password: yup.string().required().label("Password"),
          })}
          onSubmit={values => console.log({ values })}
        >
          <TextField
            name="name"
            icon="account"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Name"
            textContentType="name"
          />
          <TextField
            name="email"
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <TextField
            name="password"
            icon="lock"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            textContentType="password"
            secureTextEntry
          />
          <SubmitButton title="Register" />
        </Form>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default RegisterScreen;
