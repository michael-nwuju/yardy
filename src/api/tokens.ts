import { client } from "./client";

export const registerToken = (token: string) => {
  return client.post("/expoPushTokens", { token });
};
