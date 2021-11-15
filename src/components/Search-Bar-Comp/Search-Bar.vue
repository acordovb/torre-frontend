<template>
  <v-text-field
    v-model="search"
    placeholder="Username"
    prepend-inner-icon="mdi-magnify"
    class="expanding-search mt-6"
    :class="{ closed: searchClosed && !search }"
    filled
    dense
    clearable
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    @keyup.enter="submit"
  />
</template>

<script src="./Search-Bar.ts" lang="ts"></script>

<style src="./Search-Bar.sass" lang="sass"></style>