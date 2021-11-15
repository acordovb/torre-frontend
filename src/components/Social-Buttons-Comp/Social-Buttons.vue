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
        <v-icon> mdi-{{ social.name }}</v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script src="./Social-Buttons.ts" lang="ts"></script>