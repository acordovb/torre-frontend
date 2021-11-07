<template>
  <v-main>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      v-on:keyup.enter="submit"
      label="Username"
      single-line
    ></v-text-field>
    <v-row justify="space-around" class="spacing-playground">
      <v-avatar size="9em">
        <v-img
          id="image"
          :src="info.person.pictureThumbnail"
          aspect-ratio="1"
          class="grey lighten-2"
        >
        </v-img>
      </v-avatar>
    </v-row>
    <v-container class="pa-6 d-flex justify-center">
      {{ info.person.name }}
    </v-container>
    <v-title>Skills and Interest</v-title>
    <v-container class="text_primary--text">
      <v-icon>mdi-bike-fast</v-icon>
      <v-title> Master/influencer</v-title>
    </v-container>
    <v-chip
      v-if="item.proficiency === 'master'"
      v-for="(item, i) in items"
      :key="i"
      class="mt-1 mr-1"
    >
      <v-chip-item-content>
        <v-chip-item-title v-text="item.name"></v-chip-item-title>
      </v-chip-item-content>
    </v-chip>

    <v-container class="text_primary--text">
      <v-icon>mdi-run-fast</v-icon>
      <v-title> Expert</v-title>
    </v-container>
    <v-chip
      v-if="item.proficiency === 'expert'"
      v-for="(item, i) in items"
      :key="i"
      class="mt-1 mr-1"
    >
      <v-chip-item-content>
        <v-chip-item-title v-text="item.name"></v-chip-item-title>
      </v-chip-item-content>
    </v-chip>

    <v-container class="text_primary--text">
      <v-icon>mdi-run</v-icon>
      <v-title> Proeficient</v-title>
    </v-container>
    <v-chip
      v-if="item.proficiency === 'proficient'"
      v-for="(item, i) in items"
      :key="i"
      class="mt-1 mr-1"
    >
      <v-chip-item-content>
        <v-chip-item-title v-text="item.name"></v-chip-item-title>
      </v-chip-item-content>
    </v-chip>

    <v-container class="text_primary--text">
      <v-icon>mdi-puzzle-plus</v-icon>
      <v-title> No experience, but interested</v-title>
    </v-container>
    <v-chip
      v-if="item.proficiency === 'no-experience-interested'"
      v-for="(item, i) in items"
      :key="i"
      class="mt-1 mr-1"
    >
      <v-chip-item-content>
        <v-chip-item-title v-text="item.name"></v-chip-item-title>
      </v-chip-item-content>
    </v-chip>
  </v-main>
</template>

<script>
import axios from "axios";

export default {
  name: "Genome",
  data: () => ({
    info: null,
    selectedItem: 1,
    items: null,
  }),
  created() {
    axios
      .get("https://torre-back-alealcor.herokuapp.com/torre/bios/torrenegra")
      .then(
        (res) => ((this.info = res.data), (this.items = res.data.strengths))
      )
      .catch((err) => {
        console.log(err.response);
      });
  },
  methods: {
    submit(e) {
      axios
        .get(
          "https://torre-back-alealcor.herokuapp.com/torre/bios/" +
            e.target.value
        )
        .then(
          (res) => (
            (this.info = res.data),
            (this.items = res.data.strengths),
            (e.target.value = "")
          )
        )
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>
