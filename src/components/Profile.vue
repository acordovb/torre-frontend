<template>
  <div>
    <v-row
      justify="space-around"
      class="spacing-playground"
    >
      <v-avatar size="9em">
        <v-img
          id="image"
          :src="srcPicture"
          aspect-ratio="1"
          class="grey lighten-2"
        />
      </v-avatar>
    </v-row>
    <v-container class="pa-6 d-flex justify-center">
      {{ name }}
      <v-icon
        v-if="verified"
        dense
      >
        mdi-check-decagram
      </v-icon>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    srcPicture: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
    },
  },
};
</script>