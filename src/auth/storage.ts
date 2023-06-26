import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "token";

export const storeToken = async (token: string) => {
  try {
    await setItemAsync(key, token);
  } catch (error) {
    console.log("Error storing token", { error });
  }
};

export const getToken = async () => {
  try {
    return await getItemAsync(key);
  } catch (error) {
    console.log("Error getting token", { error });
  }
};

export const getUser = async () => {
  try {
    const token = await getToken();

    if (token) {
      return jwtDecode(token);
    } else return null;
  } catch (error) {
    console.log("Error getting User", { error });
  }
};

export const removeToken = async () => {
  try {
    await deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing token", { error });
  }
};
