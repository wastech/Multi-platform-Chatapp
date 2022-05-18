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
          v-model="username"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
          <template v-slot:after>
            <q-icon name="add" />
          </template>
        </q-input>
      </form>

      <!-- users -->
      <section>
        <div class="text-subtitle1 text-weight-bold">Resent</div>
        <q-list class="q-my-md">
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Brunhilde Panswick</q-item-label>
              <q-item-label caption lines="1"
                >bpanswick4@csmonitor.com</q-item-label
              >
            </q-item-section>

            <q-item-section side>
             1 min ago
            </q-item-section>
          </q-item>
        </q-list>
      </section>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style scoped>

</style>