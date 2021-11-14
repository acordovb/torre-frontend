<template>
  <v-main class="pa-4">
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    />
    <Profile
      :src-picture="info.person.pictureThumbnail"
      :name="info.person.name"
      :verified="info.person.verified"
    />
    <span>Skills and Interest</span>

    <Skills icon="mdi-bike-fast" :array-skills="mastersObjs">
      Master/Influencer
    </Skills>

    <Skills icon="mdi-run-fast" :array-skills="expertObjs"> Expert </Skills>

    <Skills icon="mdi-run" :array-skills="proficientObjs"> Proeficient </Skills>

    <Skills icon="mdi-puzzle-plus" :array-skills="noExperienceObjs">
      No experience, but interested
    </Skills>
  </v-main>
</template>

<script>
import axios from "axios";
import Skills from "@/components/Skills";
import Profile from "@/components/Profile";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "Genome",
  components: {
    Loading,
    Skills,
    Profile,
  },
  props: ["userId"],
  data: () => ({
    isLoading: true,
    fullPage: true,
    info: null,
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
