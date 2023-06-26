import { client } from "./client";

export const send = async ({ message = "", listingId = "" }) => {
  return await client.post("/messages", { message, listingId });
};
