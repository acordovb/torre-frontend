import Vue from "vue";
export default Vue.extend({
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
});