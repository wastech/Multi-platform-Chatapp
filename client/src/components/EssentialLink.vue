<template>
  <div class="main">
    <q-splitter v-model="splitterModel" style="height: 100vh">
      <template v-slot:before class="q-my-xl">
        <q-tabs v-model="tab" vertical>
          <q-tab name="chats" icon="chat" />
          <q-tab name="profile" icon="account_circle" />
          <q-tab name="groups" icon="group" />
          <q-tab name="settings" icon="settings" />
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

          <q-tab-panel name="groups">
            <group-component />
          </q-tab-panel>
          <q-tab-panel name="settings">
            <setting-component />
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
import GroupComponent from "./groupComponent.vue";
import SettingComponent from "./SettingComponent.vue";

export default {
  components: {
    ChatComponent,
    ProfileComponent,
    GroupComponent,
    SettingComponent,
  },
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
