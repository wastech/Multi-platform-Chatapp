<template>
  <q-layout class="user-chat">
    <q-page-container>
      <q-page
        :style-fn="
          (offset, height) => {
            return { height: `${height - offset}px` };
          }
        "
      >
        <section>
          <q-list class="q-my-md">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="__text">
                  Brunhilde <q-badge color="green" rounded class="q-ml-sm"
                /></q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </section>
        <q-separator />
        <div class="q-pa-md row justify-center">
          <div style="width: 100%; max-width: 800px">
            <q-chat-message
              name="me"
              avatar="https://cdn.quasar.dev/img/avatar1.jpg"
              :text="['hey, how are you?']"
              sent
            />
            <q-chat-message
              name="Jane"
              avatar="https://cdn.quasar.dev/img/avatar2.jpg"
              :text="['doing fine, how r you?']"
            />
          </div>
        </div>

        <!-- form section -->
        <section>
          <q-footer class="bg-grey-3">
            <div class="q-gutter-y-md column" style="max-width: 90%">
              <q-input
                color="purple-12"
                :rules="[(val) => !!val || 'Field is required']"
                placeholder="Type message"
                v-model="content"
              >
                <template v-slot:after>
                  <q-icon name="send" @click.prevent="onSubmit" />
                </template>
              </q-input>
            </div>
          </q-footer>
        </section>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import MessageService from "../services/MessageService";
export default {
  data() {
    return {
      content: "",
      chatId: this.$route.params.id,
      messages: [],
    };
  },
  methods: {
    onSubmit() {
      this.message();
    },
    async message() {
      try {
        const response = await MessageService.message({
          content: this.content,
          chatId: this.chatId,
        });
        // }
        this.$q.notify({
          type: "positive",
          timeout: 1000,
          message: "success",
        });
        // this.$router.push("/");
      } catch (error) {
        console.log("this is error", error.response.data.error);
        this.$q.notify({
          type: "negative",
          timeout: 500,

          message: error.response.data.error,
        });
      }
    },
    async getPost() {
      try {
        await MessageService.allMessages(this.chatId).then((response) => {
          this.messages = response.data.messages;
          console.log("first",this.messages)
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  async mounted() {
    this.getPost();
  },
};
</script>

<style  scoped>
.user-chat {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(15, 34, 58, 0.12);
  transition: all 0.4s;
}
</style>
