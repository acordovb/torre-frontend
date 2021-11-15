<template>
  <v-card
    class="mx-auto mb-3 pa-2"
    max-width="600"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-avatar
        tile
        size="80"
      >
        <v-img
          id="image"
          :src="organization.picture"
          aspect-ratio="1"
          class="grey lighten-2"
        />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-subtitle>
          <span style="color: #cddc39">{{ organization.name }}</span>
        </v-list-item-subtitle>
        <v-list-item-title class="text-h7 mb-1">
          <span style="color: #cddc39"> {{ objective }} </span>
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ tagline }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      <div>
        <v-icon
          class="pl-2"
          dense
        >
          mdi-briefcase
        </v-icon>
        {{ typeJob }}
      </div>
      <div v-if="visibleCompen">
        <v-icon
          class="pl-2"
          dense
        >
          mdi-cash
        </v-icon>
        <span>
          {{ compensation.currency }}{{ compensation.minAmount }} -
          {{ compensation.maxAmount }}/{{ compensation.periodicity }}
        </span>
      </div>
      <div v-if="remote">
        <v-icon
          class="pl-2"
          dense
        >
          mdi-earth
        </v-icon> Remote
      </div>
    </v-card-text>
    <panelSkills :array-skills="skills" />
    <v-card-actions class="d-flex justify-center">
      <v-btn
        outlined
        rounded
        text
      >
        View
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script src="./Job-Card.ts" lang="ts"></script>