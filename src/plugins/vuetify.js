import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes:{
            dark:{
                primary: '#27292d',
                secondary: '#CDDC39',
                text_primary:'#FFFFFFA6'
            }
        }
    }
});
