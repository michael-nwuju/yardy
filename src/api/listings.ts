import { client } from "./client";
import { AxiosRequestConfig } from "axios";
const endpoint = "/listings";

export const getListings = () => client.get(endpoint);

export const addListing = (
  input: FormData,
  onUploadProgress?: AxiosRequestConfig["onUploadProgress"]
) => {
  return client.post(endpoint, input, { onUploadProgress });
};
