<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        Skills
        <v-icon dense> mdi-weight-lifter </v-icon>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-chip-group active-class="primary--text" column>
          <v-chip v-for="(item, i) in arraySkills" :key="i">
            {{ item.name }}
          </v-chip>
        </v-chip-group>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  props: {
    arraySkills: {
      type: Array,
      required: true,
    },
  },
};
</script>