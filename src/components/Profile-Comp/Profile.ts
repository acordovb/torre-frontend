import Vue from "vue";
export default Vue.extend({
    props: {
        srcPicture: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        verified: {
            type: Boolean,
        },
    },
});