<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" class="primary" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Torre </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />

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

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn :loading="loading" class="ma-0 secondary--text" plain>
        SIGN IN
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: null,
    items: [
      { title: "Your Genome", icon: "mdi-account", to: "/" },
      { title: "Jobs/gigs", icon: "mdi-compass", to: "/Jobs" },
      { title: "People", icon: "mdi-human-greeting-variant", to: "/People" },
    ],
  }),
};
</script>
