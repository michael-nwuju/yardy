import { create } from "apisauce";
import * as cache from "../utilities/cache";
import { AxiosRequestConfig } from "axios";
import * as authStorage from "../auth/storage";

export const client = create({ baseURL: "https://yardy-api.onrender.com/api" });

const get = client.get;

client.get = async <T>(
  url: string,
  params?: {},
  axiosConfig?: AxiosRequestConfig
) => {
  const response = await get<T>(url, params, axiosConfig);

  if (response.ok) {
    await cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);

  if (data) {
    return { ...response, ok: true, data };
  } else {
    return response as any;
  }
};

client.addAsyncRequestTransform(async request => {
  const token = await authStorage.getToken();

  if (!token) return;

  (request.headers as any)["x-auth-token"] = token;
});
