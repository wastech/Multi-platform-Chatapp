import { api } from "boot/axios";

export default {
    allMessages(credentials) {
        return api.get("messages/:id", credentials);
    },
    message(credentials) {
        return api.post("/messages", credentials);
    },
}