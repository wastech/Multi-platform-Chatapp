<template>
  <q-page >
    <div class="text-title q-my-md">
      <div class="text-h6 text-weight-bold">Chats</div>
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
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style>
</style>