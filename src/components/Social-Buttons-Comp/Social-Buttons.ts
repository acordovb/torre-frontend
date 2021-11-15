import Vue from "vue";
export default Vue.extend({
    props: {
        socials: {
            type: Array,
            required: true,
        },
    },
});