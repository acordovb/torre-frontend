<template>
  <div>
    <v-row class="justify-center">
      <v-btn
        v-for="(social, i) in socials"
        :key="i"
        :href="social.address"
        class="mr-1"
        target="_blank"
      >
        <v-icon> mdi-{{ social.name }} || mdi-link </v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    socials: {
      type: Array,
      required: true,
    },
  },
};
</script>