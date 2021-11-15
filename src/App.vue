<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      class="primary"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Torre
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
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
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title>
        torre<span class="secondary--text">.co</span>
      </v-toolbar-title>

      <v-spacer />

      <searchBar />

      <v-btn
        class="ma-0 secondary--text"
        plain
      >
        SIGN IN
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import searchBar from "@/components/Search-Bar-Comp/Search-Bar";

export default {
  name: "App",
  components: {
    searchBar,
  },
  data: () => ({
    drawer: null,
    items: [
      { title: "Your Genome", icon: "mdi-account", to: "/" },
      { title: "Jobs/gigs", icon: "mdi-compass", to: "/jobs" },
      { title: "People", icon: "mdi-human-greeting-variant", to: "/people" },
    ],
  }),
};
</script>