import { api } from "boot/axios";

export default {
  allMessages(userId, credentials) {
    return api.get(`messages/${userId}`, credentials);
  },
  message(credentials) {
    return api.post("/messages", credentials);
  },
};