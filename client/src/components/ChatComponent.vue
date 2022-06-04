<template>
  <q-page>
    <div class="text-title q-my-md">
      <div class="text-h6 text-weight-bolder">Chats</div>
      <!-- search box -->
      <form action="" class="q-my-lg">
        <q-input
          square
          filled
          class="bg-soft-light"
          type="email"
          placeholder="Search messages or users"
          v-model="keyword"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
          <template v-slot:after>
            <q-icon name="add" />
          </template>
        </q-input>
      </form>
      <q-banner
        class="bg-grey-3 text-center"
        v-if="keyword && users.length === 0"
      >
        No user <span v-html="matchName(keyword)"></span> data now
      </q-banner>
      <!-- users -->
      <section v-else>
        <div class="text-subtitle1 text-weight-bold">Resent</div>
        <q-list class="q-my-md">
          <q-item v-for="user in users" :key="user.id">
            <q-item-section avatar>
              <q-avatar>
                <img
                  v-if="user.profilePhoto !== 'no-photo.jpg'"
                  :src="`${url}/uploads/avatars/${user.profilePhoto}`"
                  alt="user,name"
                />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label
                v-on:click="goToChatId(user._id)"
                v-html="matchName(user.name)"
              ></q-item-label>
              <q-item-label
                caption
                lines="1"
                v-html="matchName(user.email)"
              ></q-item-label>
            </q-item-section>

            <q-item-section side>
              {{ niceDate(user.createdAt) }}
            </q-item-section>
          </q-item>
        </q-list>
      </section>
    </div>
  </q-page>
</template>

<script>
import { date } from "quasar";
import { debounce } from "lodash";
import { api } from "boot/axios";
export default {
  // name: 'ComponentName',
  data() {
    return {
      users: [],
      url: "http://localhost:5000",
      keyword: "",
    };
  },

  watch: {
    $route: "fetchData",
    keyword() {
      if (!this.keyword) return;
      this.debounceName();
    },
  },

  mounted() {
    this.fetchData();
    this.debounceName = debounce(this.fetchData, 500);
  },

  computed: {
    niceDate() {
      return (timeStamp) => {
        return date.formatDate(timeStamp, "MMM DD HH:mm");
      };
    },
  },
  methods: {
    goToChatId(id) {
      return this.$router.push({ path: id });
    },
    matchName(current) {
      let reggie = new RegExp(this.keyword, "ig");
      let found = current.search(reggie) !== -1;
      return !found
        ? current
        : current.replace(reggie, "<b>" + this.keyword + "</b>");
    },
    async fetchData() {
      try {
        if (this.keyword) {
          await api
            .get(`users/?keyword=${this.keyword}`, {})
            .then((response) => {
              this.users = response.data.data;
            });
        } else {
          await api.get(`users`, {}).then((response) => {
            this.users = response.data.data;
          });
        }
      } catch (err) {}
    },
    // viewPost(item_id) {
    //   this.$router.push({ name: "blog", params: { id: item_id } });
    // },
  },
};
</script>

<style scoped>
.img {
  object-fit: cover;
}
</style>