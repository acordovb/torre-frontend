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
    <div class="pb-5">
      <socialBtns :socials="info.person.links" />
    </div>

    <v-card
      class="mx-auto mb-3 pa-2"
      max-width="800"
      outlined
    >
      <span style="color: #cddc39">Skills and interests</span>

      <Skills
        icon="mdi-bike-fast"
        :array-skills="mastersObjs"
      >
        Master/Influencer
      </Skills>

      <Skills
        icon="mdi-run-fast"
        :array-skills="expertObjs"
      >
        Expert
      </Skills>

      <Skills
        icon="mdi-run"
        :array-skills="proficientObjs"
      >
        Proeficient
      </Skills>

      <Skills
        icon="mdi-walk"
        :array-skills="noviceObjs"
      >
        Novice
      </Skills>

      <Skills
        icon="mdi-puzzle-plus"
        :array-skills="noExperienceObjs"
      >
        No experience, but interested
      </Skills>
    </v-card>
    <v-card
      v-if="info.opportunities[3].data.length > 0"
      class="mx-auto mb-3 pa-2"
      max-width="800"
      outlined
    >
      <div>
        <Skills :array-skills="info.opportunities[3].data">
          Industries and sectors of interest:
        </Skills>
      </div>
    </v-card>
    <v-card
      class="mx-auto mb-3 pa-2"
      max-width="800"
      outlined
    >
      <div class="pa-1">
        <v-container> Languages: </v-container>
        <v-chip-group
          active-class="primary--text"
          column
        >
          <v-chip
            v-for="(item, i) in info.languages"
            :key="i"
          >
            {{ item.language }} - {{ item.fluency }}
          </v-chip>
        </v-chip-group>
      </div>
    </v-card>
  </v-main>
</template>

<script>
import axios from "axios";
import Skills from "@/components/Skills-Comp/Skills";
import Profile from "@/components/Profile-Comp/Profile";
import socialBtns from "@/components/Social-Buttons-Comp/Social-Buttons";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "Genome",
  components: {
    Loading,
    Skills,
    Profile,
    socialBtns,
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
    noviceObjs: null,
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
        .get(process.env.VUE_APP_API + "/bios/" + (this.userId || "torrenegra"))
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
      this.noviceObjs = [];
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
        } else if (objStrengths.proficiency == "novice") {
          this.noviceObjs.push(objStrengths);
        }
      });
    },
  },
};
</script>
