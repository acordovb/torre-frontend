<template>
  <v-main class="pa-4">
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    />

    <jobCard
      v-for="(job, i) in info"
      :key="i"
      :organization="job.organizations[0]"
      :objective="job.objective"
      :tagline="job.tagline || ''"
      :typeJob="job.type"
      :compensation="job.compensation.data"
      :remote="job.remote"
      :skills="job.skills"
      :visibleCompen="job.compensation.visible"
    />
  </v-main>
</template>

<script>
import axios from "axios";
import jobCard from "@/components/Job-Card";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "Jobs",
  components: {
    Loading,
    jobCard,
  },
  data: () => ({
    isLoading: true,
    fullPage: true,
    info: null,
  }),
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.getJobsDetails();
      }
    );
    this.getJobsDetails();
  },
  methods: {
    getJobsDetails() {
      this.isLoading = true;
      axios
        .post(process.env.VUE_APP_API + "/opportunities/")
        .then(
          (res) => ((this.isLoading = false), (this.info = res.data.results))
        )
        .catch((err) => {
          console.log(err.response);
        });
    },
    onCancel() {
      console.log("User cancelled the loader.");
    },
  },
};
</script>
