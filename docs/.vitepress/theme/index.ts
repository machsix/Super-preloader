import DefaultTheme from 'vitepress/theme';
import type {Theme} from 'vitepress';
import Jbadge from './components/Jbadge.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({app, router, siteData}) {
    // register your custom global components
    app.component('Jbadge', Jbadge);
  }
} satisfies Theme;
