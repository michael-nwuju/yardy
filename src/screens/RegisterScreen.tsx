import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as yup from "yup";

import Screen from "../components/Screen";
import {
  ErrorMessage,
  Form,
  SubmitButton,
  TextField,
} from "../components/forms";
import { login, register } from "../api/auth";
import useApi from "../hooks/useApi";
import { User } from "../auth/context";
import ActivityIndicator from "../components/ActivityIndicator";
import useAuthContext from "../hooks/useAuthContext";

export interface RegisterScreenProps {}

const RegisterScreen: React.FC<RegisterScreenProps> = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const authContext = useAuthContext();

  const registerApi = useApi({ api: register });

  const loginApi = useApi({ api: login });

  return (
    <Screen>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
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
          onSubmit={async values => {
            try {
              setErrorMessage("");
              const user = (await registerApi.request(values)) as
                | User
                | { error: string };

              if ((user as { error: string }).error) {
                return setErrorMessage((user as { error: string }).error);
              }

              if (user) {
                const token = await loginApi.request({
                  email: values.email,
                  password: values.password,
                });

                authContext.logIn(token);
              }
            } catch (error: any) {
              setErrorMessage(error?.message || "An unknown error occured.");
            }
          }}
        >
          <ErrorMessage
            error={errorMessage}
            touched={registerApi.error || loginApi.error}
          />
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
