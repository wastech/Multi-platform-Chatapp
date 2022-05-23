
<template>
  <q-page>
    <div class="text-title q-my-md">
      <div class="text-h6 text-weight-bolder">Settings</div>
    </div>
    <!-- image profile -->
    <div class="profile__image text-center">
      <img
        :src="`${url}/uploads/avatars/${user.profilePhoto}`"
        alt="user.name"
      />
      <div class="text-subtitle1">{{ user.name }}</div>
      <div class="text-caption text-muted">
        <q-badge color="green" rounded class="q-mr-sm" />Active
      </div>
    </div>
    <q-separator class="q-my-lg" />
    <div class="text-body2 text-grey text-center">
      {{ user.about }}
    </div>
    <q-list class="rounded-borders q-my-lg">
      <q-expansion-item
        expand-separator
        icon="perm_identity"
        label="Personal Info"
      >
        <q-card>
          <q-card-section>
            <form action="" @submit.prevent="onSubmit">
              <div class="q-gutter-y-md column" style="max-width: 100%">
                <q-input
                  clearable
                  filled
                  type="text"
                  color="purple-12"
                  v-model="name"
                />
                <q-input
                  clearable
                  filled
                  type="email"
                  color="purple-12"
                  v-model="email"
                />
                <q-input
                  clearable
                  filled
                  type="text"
                  color="purple-12"
                  v-model="location"
                />

                <q-input v-model="about" clearable filled type="textarea" />
                <div>
                  <q-btn
                    class="full-width btn-color"
                    type="submit"
                    label="Update"
                    :disabled="isDisabled"
                    no-caps
                  />
                </div>
              </div>
            </form>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        icon="admin_panel_settings

"
        label="Privacy"
      >
        <q-card>
          <q-card-section>
            <div class="text-overline text-grey">Name</div>
            <div class="text-subtitle2">{{ user.name }}</div>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item expand-separator icon="security" label="Security">
        <q-card>
          <q-card-section>
            <div class="text-overline text-grey">Name</div>
            <div class="text-subtitle2">Admin123</div>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item expand-separator icon="help" label="help">
        <q-card>
          <q-card-section>
            <div class="text-overline text-grey">Name</div>
            <div class="text-subtitle2">Admin123</div>
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
      name: "",
      location: "",
      email: "",
      about: "",
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
    isDisabled: function () {
      return !this.email || !this.name || !this.about || !this.location;
    },
  },
  methods: {
    async onSubmit() {
      try {
        await AuthenticationService.updatedetails({
          email: this.email,
          about: this.about,
          location: this.location,
          name: this.name,
        }).then((response) => {
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
          this.name = response.data.data.name;
          this.about = response.data.data.about;
          this.location = response.data.data.location;
          this.email = response.data.data.email;
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
