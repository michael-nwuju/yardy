import { useContext } from "react";

import { AuthContext, User } from "../auth/context";
import * as authStorage from "../auth/storage";
import jwtDecode from "jwt-decode";

export default function useAuthContext() {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    if (setUser) {
      setUser(undefined);
      authStorage.removeToken();
    }
  };

  const logIn = (data: string) => {
    const user = jwtDecode(data) as User;

    setUser && setUser(user);

    authStorage.storeToken(data);
  };

  return { user, setUser, logOut, logIn };
}
