<template>
  <div class="main">
    <q-splitter v-model="splitterModel" style="height: 100vh">
      <template v-slot:before class="q-my-xl">
        <q-tabs v-model="tab" vertical class="text-teal">
          <q-tab name="chats" icon="chat" />
          <q-tab name="profile" icon="account_circle" />
          <q-tab name="movies" icon="movie" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="chats">
            <chat-component />
          </q-tab-panel>

          <q-tab-panel name="profile">
            <profile-component />
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h4 q-mb-md">Movies</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script>
import { ref } from "vue";
import ChatComponent from "./ChatComponent.vue";
import ProfileComponent from "./ProfileComponent.vue";

export default {
  components: { ChatComponent, ProfileComponent },
  setup() {
    return {
      tab: ref("chats"),
      splitterModel: ref(15),
    };
  },
};
</script>
<style scoped>
.q-tab-panels {
  background-color: #f5f7fb;
  height: 100vh;
}
.q-tabs {
  background-color: #fff;
  justify-content: center !important;
  box-shadow: 0 2px 4px rgba(15, 34, 58, 0.12);
}
</style>
