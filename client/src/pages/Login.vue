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
              <q-form class="q-gutter-md q-pa-lg">
                <div class="text-capton text-medium">Email</div>
                <q-input
                  square
                  filled
                  dense
                  class="bg-soft-light"
                  type="email"
                  v-model="username"
                >
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                </q-input>

                <div>
                  <div class="text-capton text-medium">
                    Password
                    <span
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
                  v-model="username"
                >
                  <template v-slot:prepend>
                    <q-icon name="key" />
                  </template>
                </q-input>
                <div>
                  <q-btn class="full-width btn-color" label="Sign In" no-caps />
                </div>
              </q-form>
            </q-card-section>
          </q-card>

          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="text-subtitle2">
                Don't have an account ?
                <span class="text__color">Signup now</span>
              </div>
              <div class="text-subtitle text-medium q-my-sm">
             © 2022 wastech. Crafted with <span style="color:tomato">	&hearts;</span> by Aremu 
              </div>
            </div>
          </q-card-section>
        </section>
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
      username: ref("Pratik"),
      password: ref("12345"),
    };
  },
});
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
