import { api } from "boot/axios";

export default {
  allChats() {
    return api.get("chat");
  },
  chat(credentials) {
    return api.post("chat", credentials);
  },
  chatGroup(credentials) {
    return api.post("chat/group", credentials);
  },
  chatRename(credentials) {
    return api.put("chat/rename", credentials);
  },
  chatRemove(credentials) {
    return api.put("chat/groupremove", credentials);
  },
  chatGroupAdd(credentials) {
    return api.put("chat/groupadd", credentials);
  },
};
