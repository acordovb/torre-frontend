<template>
  <v-text-field
    v-model="search"
    placeholder="Username"
    prepend-inner-icon="mdi-magnify"
    class="expanding-search mt-6"
    :class="{ closed: searchClosed && !search }"
    filled
    dense
    clearable
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    @keyup.enter="submit"
  />
</template>

<script>
export default {
  data: () => ({
    userId: null,
    search: null,
    searchClosed: true,
  }),
  methods: {
    submit(e) {
      this.userId = e.target.value;
      this.$router.push("/genome/" + this.userId);
    },
  },
};
</script>

<style lang="sass">
.v-input.expanding-search
    transition: max-width 0.5s
    .v-input__slot
        cursor: pointer !important
        &:before, &:after
            border-color: transparent !important
    &.closed
        max-width: 45px
        .v-input__slot
            background: transparent !important
</style>