export const siteRu = {
  '/ru/': {
    lang: 'Русский',
    title: 'Metarhia',
    description: 'Корпоративный технологический стек для приватных облаков Node.js',
  },
};

export const localeRu = {
  '/ru/': {
    selectLanguageText: 'Языки',
    editLinkText: 'Редактировать эту страницу на GitHub',
    contributorsText: 'Участники',
    lastUpdatedText: 'Последнее обновление',
    notFound: ['Нашлось всё, кроме ума...'],
    backToHome: 'Никогда не забывайте, откуда вы',
    navbar: [
      {
        text: 'Impress',
        children: [
          {
            text: 'Обзор',
            link: '/ru/impress/',
            activeMatch: '^/ru/impress/$',
          },
          {
            text: 'Вступление',
            link: '/ru/impress/introduction.html',
          },
          {
            text: 'Начало работы',
            link: '/ru/impress/getting-started.html',
          },
        ],
      },
      {
        text: 'Стек',
        children: [
          {
            text: 'Обзор',
            link: '/ru/stack/',
            activeMatch: '^/ru/stack/$',
          },
          {
            text: 'Metacom',
            link: '/ru/stack/metacom.html',
          },
          {
            text: 'Metavm',
            link: '/ru/stack/metavm.html',
          },
          {
            text: 'Metaschema',
            link: '/ru/stack/metaschema.html',
          },
          {
            text: 'Metadomain',
            link: '/ru/stack/metadomain.html',
          },
          {
            text: 'Metaconfiguration',
            link: '/ru/stack/metaconfiguration.html',
          },
          {
            text: 'Metawatch',
            link: '/ru/stack/metawatch.html',
          },
          {
            text: 'Metalog',
            link: '/ru/stack/metalog.html',
          },
          {
            text: 'Metasql',
            link: '/ru/stack/metasql.html',
          },
          {
            text: 'Metautil',
            link: '/ru/stack/metautil.html',
          },
          {
            text: 'Metatests',
            link: '/ru/stack/metatests.html',
          },
          {
            text: 'Concolor',
            link: '/ru/stack/concolor.html',
          },
          {
            text: 'Common',
            link: '/ru/stack/common.html',
          },
        ],
      },
    ],
  },
};
