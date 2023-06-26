import React from "react";
import { Image, StyleSheet, View } from "react-native";
import * as yup from "yup";
import {
  TextField,
  SubmitButton,
  Form,
  ErrorMessage,
} from "../components/forms";
import Screen from "../components/Screen";
import { login } from "../api/auth";
import useApi from "../hooks/useApi";
import useAuthContext from "../hooks/useAuthContext";

const LoginScreen = () => {
  const { logIn } = useAuthContext();

  const { request: loginUser, error } = useApi({ api: login });

  return (
    <Screen>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Form
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={yup.object().shape({
            email: yup.string().required().email().label("Email"),
            password: yup.string().required().label("Password"),
          })}
          onSubmit={async values => {
            const data = await loginUser(values);

            if (data) {
              logIn(data);
            }
          }}
        >
          <ErrorMessage error="Invalid credentials" touched={error} />
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
          <SubmitButton title="Login" />
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

export default LoginScreen;
