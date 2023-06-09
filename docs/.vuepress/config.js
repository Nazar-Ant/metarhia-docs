import { defaultTheme, defineUserConfig } from 'vuepress';
import * as config from './configs/index';

export default defineUserConfig({
  shouldPrefetch: true,
  locales: {
    ...config.siteEn,
    ...config.siteUk,
    ...config.siteRu,
  },
  theme: defaultTheme({
    logo: '/images/metarhia.png',
    locales: {
      ...config.localeEn,
      ...config.localeUk,
      ...config.localeRu,
    },
    repo: 'https://github.com/metarhia',
    docsRepo: 'https://github.com/Nazar-Ant/metarhia-docs',
    docsDir: 'docs',
    docsBranch: 'main',
    editLink: true,
    editLinkPattern: ':repo/edit/:branch/:path',
    repoLabel: 'GitHub',
  }),
});
