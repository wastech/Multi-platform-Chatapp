<template>
  <q-page>
    <div class="text-title q-my-md">
      <div class="text-h6 text-weight-bolder">
        Groups
        <span style="float: right">
          <q-icon @click="alert = true" name="group" />
        </span>
        <!-- dialog Box -->
        <q-dialog v-model="alert">
          <q-card style="width: 60vw">
            <q-card-section class="row items-center q-pa-lg">
              <div class="text-h6 text-weight-bolder">Create New Group</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>
            <q-separator />
            <q-card-section class="q-pt-none">
              <div class="">
                <div class="text-capton text-medium q-my-md">Group Name</div>
                <q-input
                  square
                  filled
                  placeholder="Enter group name"
                  dense
                  type="text"
                >
                </q-input>
              </div>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn
                flat
                label="Create Groups"
                class="btn-color"
                v-close-popup
                no-caps
              />
            </q-card-actions>
          </q-card>
        </q-dialog>

        <!-- dialog Box ends here-->
      </div>
      <!-- search box -->
      <form action="" class="q-my-lg">
        <q-input
          square
          filled
          class="bg-soft-light"
          type="email"
          placeholder="Search groups"
          v-model="username"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </form>

      <!-- users -->
      <section>
        <q-list class="q-my-md">
          <q-item>
            <q-item-section avatar>
              <q-avatar> R </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="__text"># Brunhilde</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </section>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      alert: false,
    };
  },
};
</script>

<style  scoped>
.__text {
  font-size: 14px !important;
  font-weight: 900;
}
.q-avatar {
  color: #7269ef !important;
  background-color: rgba(114, 105, 239, 0.25) !important;
}
.btn-color {
  color: #fff;
  background-color: #7269ef;
  border-color: #7269ef;
}

.btn-color:hover {
  color: #fff;
  background-color: #5246eb;
  border-color: #473bea;
  text-decoration: none;
}
</style>