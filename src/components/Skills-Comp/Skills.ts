import Vue from "vue";
export default Vue.extend({
    props: {
        icon: {
            type: String,
            default: "",
        },
        arraySkills: {
            type: Array,
            required: true,
        },
    },
});