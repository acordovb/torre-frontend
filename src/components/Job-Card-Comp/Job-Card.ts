import Vue from "vue";
import panelSkills from "../../components/Panel-Skills-Comp/Panel-Skills";
export default Vue.extend({
    components: {
        panelSkills,
    },
    props: {
        organization: {
            type: Object,
            required: true,
        },
        tagline: {
            type: String,
            required: true,
        },
        objective: {
            type: String,
            required: true,
        },
        typeJob: {
            type: String,
            required: true,
        },
        compensation: {
            type: Object,
            required: true,
        },
        remote: {
            type: Boolean,
            required: true,
        },
        skills: {
            type: Array,
            required: true,
        },
        visibleCompen: {
            type: Boolean,
            required: true,
        },
    },
});