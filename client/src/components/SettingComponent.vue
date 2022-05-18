
<template>
  <q-page>
    <div class="text-title q-my-md">
      <div class="text-h6 text-weight-bolder">Settings</div>
    </div>
    <!-- image profile -->
    <div class="profile__image text-center">
      <img
        src="http://chatvia-light.vue.themesbrand.com/img/avatar-1.67e2b9d7.jpg"
        alt=""
      />
      <div class="text-subtitle1">Patricia Smith</div>
      <div class="text-caption text-muted">
        <q-badge color="green" rounded class="q-mr-sm" />Active
      </div>
    </div>
    <q-separator class="q-my-lg" />
    <div class="text-body2 text-grey">
      If several languages coalesce, the grammar of the resulting language is
      more simple and regular than that of the individual.
    </div>
    <q-list class="rounded-borders q-my-lg">
      <q-expansion-item
        expand-separator
        icon="perm_identity"
        label="Personal Info"
      >
        <q-card>
          <q-card-section>
            <div class="text-overline text-grey">Name</div>
            <div class="text-subtitle2">Admin123</div>
          </q-card-section>
          <q-card-section>
            <div class="text-overline text-grey">Email</div>
            <div class="text-subtitle2">Admin123@gmail.com</div>
          </q-card-section>
          <q-card-section>
            <div class="text-overline text-grey">Location</div>
            <div class="text-subtitle2">California, USA</div>
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
            <div class="text-subtitle2">Admin123</div>
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
export default {};
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
