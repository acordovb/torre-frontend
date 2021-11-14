<template>
  <div
    v-if="arraySkills.length != 0"
    class="pa-1"
  >
    <v-container>
      <v-icon>{{ icon }}</v-icon>
      <slot />
    </v-container>
    <v-chip-group
      active-class="primary--text"
      column
    >
      <v-chip
        v-for="(item, i) in arraySkills"
        :key="i"
      >
        {{ item.name }}
        <span v-if="item.weight > 1">
          <v-icon
            small
            class="ml-1"
          >mdi-weight</v-icon>
          {{ item.weight }}
        </span>
      </v-chip>
    </v-chip-group>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    arraySkills: {
      type: Array,
      required: true,
    },
  },
};
</script>