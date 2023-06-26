import React, { createContext } from "react";

export interface User {
  email: string;
  userId: number;
  name: string;
  iat: number;
}

export const AuthContext = createContext<{
  user?: User;
  setUser?: React.Dispatch<React.SetStateAction<User | undefined>>;
}>({});
