<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" class="primary" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Torre </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title
        >torre<span class="secondary--text">.co</span></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-text-field
        @focus="searchClosed = false"
        @blur="searchClosed = true"
        v-on:keyup.enter="submit"
        v-model="search"
        placeholder="Username"
        prepend-inner-icon="mdi-magnify"
        class="expanding-search mt-6"
        :class="{ closed: searchClosed && !search }"
        filled
        dense
        clearable
      ></v-text-field>

      <v-btn class="ma-0 secondary--text" plain> SIGN IN </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view> </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    userId: null,
    search: null,
    searchClosed: true,
    drawer: null,
    items: [
      { title: "Your Genome", icon: "mdi-account", to: "/" },
      { title: "Jobs/gigs", icon: "mdi-compass", to: "/jobs" },
      { title: "People", icon: "mdi-human-greeting-variant", to: "/people" },
    ],
  }),
  methods: {
    submit(e) {
      this.userId = e.target.value;
      this.$router.push("/genome/" + this.userId);
      this.$forceUpdate();
    },
  },
};
</script>

<style lang="sass">
.v-input.expanding-search
  transition: max-width 0.5s
  .v-input__slot
    cursor: pointer !important
    &:before, &:after
      border-color: transparent !important
  &.closed
    max-width: 45px
    .v-input__slot
      background: transparent !important
</style>