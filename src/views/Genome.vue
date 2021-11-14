<template>
  <v-main class="pa-7">
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    />
    <v-row
      justify="space-around"
      class="spacing-playground"
    >
      <v-avatar size="9em">
        <v-img
          id="image"
          :src="info.person.pictureThumbnail"
          aspect-ratio="1"
          class="grey lighten-2"
        />
      </v-avatar>
    </v-row>
    <v-container class="pa-6 d-flex justify-center">
      {{ info.person.name }}
    </v-container>
    <span>Skills and Interest</span>

    <div
      v-if="mastersObjs.length != 0"
      class="pa-1"
    >
      <v-container>
        <v-icon>mdi-bike-fast</v-icon>
        Master/Influencer
      </v-container>
      <v-chip-group
        active-class="primary--text"
        column
      >
        <v-chip
          v-for="(item, i) in mastersObjs"
          :key="i"
        >
          {{ item.name }}
        </v-chip>
      </v-chip-group>
    </div>

    <div
      v-if="expertObjs.length != 0"
      class="pa-1"
    >
      <v-container>
        <v-icon>mdi-run-fast</v-icon>
        Expert
      </v-container>
      <v-chip-group
        active-class="primary--text"
        column
      >
        <v-chip
          v-for="(item, i) in expertObjs"
          :key="i"
        >
          {{ item.name }}
        </v-chip>
      </v-chip-group>
    </div>

    <div
      v-if="proficientObjs.length != 0"
      class="pa-1"
    >
      <v-container>
        <v-icon>mdi-run</v-icon>
        Proeficient
      </v-container>
      <v-chip-group
        active-class="primary--text"
        column
      >
        <v-chip
          v-for="(item, i) in proficientObjs"
          :key="i"
        >
          {{ item.name }}
        </v-chip>
      </v-chip-group>
    </div>

    <div
      v-if="noExperienceObjs.length != 0"
      class="pa-1"
    >
      <v-container>
        <v-icon>mdi-puzzle-plus</v-icon>
        No experience, but interested
      </v-container>
      <v-chip-group
        active-class="primary--text"
        column
      >
        <v-chip
          v-for="(item, i) in noExperienceObjs"
          :key="i"
        >
          {{ item.name }}
        </v-chip>
      </v-chip-group>
    </div>
  </v-main>
</template>

<script>
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "Genome",
  components: {
    Loading,
  },
  props: ["userId"],
  data: () => ({
    isLoading: true,
    fullPage: true,
    search: null,
    info: null,
    selectedItem: 1,
    items: null,
    mastersObjs: null,
    expertObjs: null,
    proficientObjs: null,
    noExperienceObjs: null,
  }),
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.getGenomeDetails();
      }
    );
    this.getGenomeDetails();
  },
  methods: {
    getGenomeDetails() {
      this.isLoading = true;
      axios
        .get(
          process.env.VUE_APP_API +
            "/torre/bios/" +
            (this.userId || "torrenegra")
        )
        .then(
          (res) => (
            (this.isLoading = false),
            (this.info = res.data),
            (this.items = res.data.strengths),
            this.renderData()
          )
        )
        .catch((err) => {
          console.log(err.response);
        });
    },
    onCancel() {
      console.log("User cancelled the loader.");
    },
    renderData() {
      this.mastersObjs = [];
      this.expertObjs = [];
      this.proficientObjs = [];
      this.noExperienceObjs = [];
      this.items.forEach((objStrengths) => {
        if (objStrengths.proficiency == "master") {
          this.mastersObjs.push(objStrengths);
        } else if (objStrengths.proficiency == "expert") {
          this.expertObjs.push(objStrengths);
        } else if (objStrengths.proficiency == "proficient") {
          this.proficientObjs.push(objStrengths);
        } else if (objStrengths.proficiency == "no-experience-interested") {
          this.noExperienceObjs.push(objStrengths);
        }
      });
    },
  },
};
</script>
