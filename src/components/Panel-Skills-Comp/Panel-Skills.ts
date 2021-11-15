import Vue from "vue";
export default Vue.extend({
    props: {
        arraySkills: {
            type: Array,
            required: true,
        },
    },
});