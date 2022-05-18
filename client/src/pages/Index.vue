<template>
  <q-layout class="user-chat">
    <q-page-container>
      <q-page :style-fn='(offset, height) => { return { height: `${height - offset}px` }}'>
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
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  setup() {
    return {
      username: ref(""),
      password: ref(""),
    };
  },
});
</script>

<style  scoped>
.user-chat {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(15,34,58,.12);
  transition: all .4s;
}
</style>
