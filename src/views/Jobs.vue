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
      :type-job="job.type"
      :compensation="job.compensation.data"
      :remote="job.remote"
      :skills="job.skills"
      :visible-compen="job.compensation.visible"
    />

    <v-card-actions class="d-flex justify-center">
      <v-btn
        v-if="previousURL != null"
        outlined
        rounded
        width="130"
        @click="getPreviousJobs"
      >
        <v-icon class="pl-2" dense>mdi-skip-previous</v-icon>
        Previous
      </v-btn>
      <v-btn outlined rounded width="130" @click="getNextsJobs">
        Next
        <v-icon class="pl-2" dense>mdi-skip-next</v-icon>
      </v-btn>
    </v-card-actions>
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
    nextURL: null,
    previousURL: null,
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
          (res) => (
            (this.isLoading = false),
            (this.info = res.data.results),
            (this.nextURL = res.data.pagination.next),
            (this.previousURL = res.data.pagination.previous)
          )
        )
        .catch((err) => {
          console.log(err.response);
        });
    },
    getNextsJobs() {
      this.isLoading = true;
      axios
        .post(process.env.VUE_APP_API + "/opportunities/?next=" + this.nextURL)
        .then(
          (res) => (
            (this.isLoading = false),
            (this.info = res.data.results),
            (this.nextURL = res.data.pagination.next),
            (this.previousURL = res.data.pagination.previous),
            this.scrollToTop()
          )
        )
        .catch((err) => {
          console.log(err.response);
        });
    },
    getPreviousJobs() {
      this.isLoading = true;
      axios
        .post(
          process.env.VUE_APP_API +
            "/opportunities/?previous=" +
            this.previousURL
        )
        .then(
          (res) => (
            (this.isLoading = false),
            (this.info = res.data.results),
            (this.nextURL = res.data.pagination.next),
            (this.previousURL = res.data.pagination.previous),
            this.scrollToTop()
          )
        )
        .catch((err) => {
          console.log(err.response);
        });
    },
    onCancel() {
      console.log("User cancelled the loader.");
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
