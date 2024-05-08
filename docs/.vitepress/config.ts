import {defineConfig} from 'vitepress';
import {en} from './en';
import {cn} from './cn';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Super-preloader',
  description: 'Super-preloader',
  // base: '/Super-preloader/',
  lastUpdated: true,
  locales: {
    root: {
      label: 'English',
      ...en
    },
    cn: {
      label: '简体中文',
      ...cn
    }
  }
});
