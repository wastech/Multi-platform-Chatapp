import { api } from "boot/axios";

export default {
  register(credentials) {
    return api.post("auth/register", credentials);
  },
  login(credentials) {
    return api.post("/auth/login", credentials);
  },
  update(credentials) {
    return api().put("auth/updatedetails", credentials);
  },

  users() {
    return api.get("/users");
  },
  profile() {
    return api.get("auth/me");
  },
  updateAvatar(data) {
    return api.put("auth/avatar", data);
  },

  updatedetails(data) {
    return api.put("auth/updatedetails", data);
  },
  delete(userId) {
    return api().delete(`auth/admin/user/${userId}`);
  },
  user(userId) {
    return api.get(`users/${userId}`);
  },
};
