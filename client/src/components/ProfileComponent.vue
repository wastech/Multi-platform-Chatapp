
<template>
  <q-page>
    <div class="text-title q-my-md">
      <div class="text-h6 text-weight-bolder">My Profile</div>
    </div>
    <!-- image profile -->
    <div class="profile__image text-center">
      <q-img
        v-if="user.profilePhoto !== 'no-photo.jpg'"
        :src="`${url}/uploads/avatars/${user.profilePhoto}`"
        alt=""
        class="img"
      >
        <!-- <template> <q-icon name="group" /></template> -->
      </q-img>
      <q-badge color="grey-1" @click="alert = true">
        <q-icon name="add" size="sm" color="black" />
      </q-badge>

      <div class="text-subtitle1">{{ user.name }}</div>

      <!-- dialog Box -->
      <q-dialog v-model="alert">
        <q-card style="width: 60vw">
          <q-card-section class="row items-center q-pa-lg">
            <div class="text-h6 text-weight-bolder">Change Profile</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <q-separator />
          <q-card-section class="q-pt-none">
            <div class="q-my-md">
              <input type="file" ref="file" @change="onSelect()" />
            </div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              label="Update Picture"
              class="btn-color"
              @click.prevent="onSubmit()"
              no-caps
            />
            <!--  v-close-popup -->
          </q-card-actions>
        </q-card>
      </q-dialog>

      <!-- dialog Box ends here-->

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
            <div class="text-subtitle2">{{ user.location }}</div>
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
      file: "",
      alert: false,
      url: "http://localhost:5000",
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
    onSelect() {
      this.file = this.$refs.file.files[0];
    },

    async onSubmit() {
      try {
        let formData = new FormData();

        formData.append("profilePhoto", this.file);

        await AuthenticationService.updateAvatar(formData).then((response) => {
          this.getPost();
          this.$q.notify({
            type: "positive",

            timeout: 1000,

            message: "Profile Picture Updated",
          });
        });
      } catch (err) {
        this.$q.notify({
          type: "negative",
          timeout: 1000,

          message: err.response.data.error,
        });
      }
    },
    async getPost() {
      try {
        await AuthenticationService.profile().then((response) => {
          this.user = response.data.data;
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
.img {
  height: 6rem;
  width: 6rem;
  border-radius: 50% !important;
  padding: 0.25rem;
  background-color: #f7f7ff;
  border: 1px solid #f0eff5;
  object-fit: cover;
}
</style>>
