<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <section
          v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '30%' }"
        >
          <q-card-section>
            <div class="top__image text-center">
              <img
                src="http://chatvia-light.vue.themesbrand.com/img/logo-dark.37cbc9c5.png"
              />
            </div>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="text-h5 text-bold">Sign in</div>
              <div class="text-caption text-medium q-my-sm">
                Sign in to continue to Chatvia.
              </div>
            </div>
          </q-card-section>
          <q-card flat bordered>
            <q-card-section>
              <q-form class="q-gutter-md q-pa-lg" @submit.prevent="onSubmit">
                <div class="text-capton text-medium">Email</div>
                <q-input
                  square
                  filled
                  dense
                  class="bg-soft-light"
                  type="email"
                  v-model="email"
                >
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                </q-input>

                <div>
                  <div class="text-capton text-medium">
                    Password
                    <span
                    @click="goToforgetPage()"
                      style="float: right; font-size: small; color: #7a7f9a"
                      class="text-muted"
                      >Forgot your password?</span
                    >
                  </div>
                </div>
                <q-input
                  square
                  filled
                  type="password"
                  dense
                  class="bg-soft-light"
                  v-model="password"
                >
                  <template v-slot:prepend>
                    <q-icon name="key" />
                  </template>
                </q-input>
                <div>
                  <q-btn
                    class="full-width btn-color"
                    type="submit"
                    label="Sign In"
                    :disabled="isDisabled"
                    no-caps
                  />
                </div>
              </q-form>
            </q-card-section>
          </q-card>

          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="text-subtitle2">
                Don't have an account ?
                <span class="text__color" @click="goToSignUpPage()"
                  >Signup now</span
                >
              </div>
              <div class="text-subtitle text-medium q-my-sm">
                © 2022 wastech. Crafted with
                <span style="color: tomato"> &hearts;</span> by Aremu
              </div>
            </div>
          </q-card-section>
        </section>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
// inside of a Vue file
// import { useQuasar } from 'quasar'
import AuthenticationService from "../services/AuthenticationService";
export default {
  data() {
    return {
      password: "",
      email: "",
    };
  },
  computed: {
    isDisabled: function () {
      return !this.email || !this.password;
    },
  },
  methods: {
    goToSignUpPage() {
      return this.$router.push({ path: "/signup" });
    },
    goToforgetPage(){
  return this.$router.push({ path: "/reset-password" });
    },
    onSubmit() {
      this.login();
    },
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        // if (this.$route.query.from) {
        //   return this.$router.replace(this.$route.query.from);
        // } else {
          this.$router.push({
            path: "/",
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
  },
};
</script>

<style  scoped>
.top__image > img {
  height: 30px;
  object-fit: contain;
}
.btn-color {
  color: #fff;
  background-color: #7269ef;
  border-color: #7269ef;
}
.text__color {
  color: #7269ef;
  cursor: pointer;
}
.btn-color:hover {
  color: #fff;
  background-color: #5246eb;
  border-color: #473bea;
  text-decoration: none;
}
.text__color:hover {
  color: #5246eb;
  text-decoration: none;
  cursor: pointer;
}
.q-field__control {
  background-color: rgba(230, 235, 245, 0.25) !important;
}
</style>>
