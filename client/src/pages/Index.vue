<template>
  <q-layout>
    <q-page-container>
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
</style>
