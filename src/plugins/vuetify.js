import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#33DAFF',
        secondary: '#565F61',
        accent: '#2895D7',
        error: '#FF5252',
        info: '#E67E22',
        success: '#52BE80',
        warning: '#F7DC6F'
      },
    },
  },
  icons: {
    iconfont: 'md',
  },
});
