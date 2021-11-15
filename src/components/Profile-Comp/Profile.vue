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
        class="pl-2"
        dense
      >
        mdi-check-decagram
      </v-icon>
    </v-container>
  </div>
</template>

<script src="./Profile.ts" lang="ts"></script>