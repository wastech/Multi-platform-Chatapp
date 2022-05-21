
<template>
  <q-page>
    <div class="text-title q-my-md">
      <div class="text-h6 text-weight-bolder">My Profile</div>
    </div>
    <!-- image profile -->
    <div class="profile__image text-center">
      <img :src="user.profilePhoto" alt="" />
      <div class="text-subtitle1">{{ user.name }}</div>
      <div class="text-caption text-muted">
        <q-badge color="green" rounded class="q-mr-sm" />Active
      </div>
    </div>
    <q-separator class="q-my-lg" />
    <div class="text-body2 text-grey" v-if="user.about">
      {{ user.about }}
    </div>
    <q-list class="rounded-borders q-my-lg">
      <q-expansion-item expand-separator icon="perm_identity" label="About">
        <q-card>
          <q-card-section>
            <div class="text-overline text-grey">Name</div>
            <div class="text-subtitle2">{{ user.name }}</div>
          </q-card-section>
          <q-card-section>
            <div class="text-overline text-grey">Email</div>
            <div class="text-subtitle2">{{ user.email }}</div>
          </q-card-section>
          <q-card-section>
            <div class="text-overline text-grey">Time</div>
            <div class="text-subtitle2">
              {{ niceDate(user.createdAt) }}
            </div>
          </q-card-section>
          <q-card-section>
            <div class="text-overline text-grey">Location</div>
            <div class="text-subtitle2">California, USA</div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-page>
</template>

<script>
import { date } from "quasar";
import AuthenticationService from "../services/AuthenticationService";
export default {
  data() {
    return {
      user: {},
    };
  },

  computed: {
    niceDate() {
      return (timeStamp) => {
        return date.formatDate(timeStamp, "MMM DD HH:mm");
      };
    },
  },
  methods: {
    async getPost() {
      try {
        await AuthenticationService.profile().then((response) => {
          this.user = response.data.data;
          console.log("first", response.data);
        });
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  async mounted() {
    this.getPost();
  },
};
</script>
<style scoped>
img {
  height: 6rem;
  width: 6rem;
  border-radius: 50% !important;
  padding: 0.25rem;
  background-color: #f7f7ff;
  border: 1px solid #f0eff5;
  object-fit: contain;
}
</style>>
