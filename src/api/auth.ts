import { client } from "./client";

export const login = <T>({ email = "", password = "" }) => {
  return client.post<T>("/auth", { email, password });
};

export const register = ({ name = "", email = "", password = "" }) => {
  return client.post("/users", { name, email, password });
};
