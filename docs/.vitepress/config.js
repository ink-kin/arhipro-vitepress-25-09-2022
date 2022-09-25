module.exports = {
  lang: 'ru-RU',
  title: 'АрхиПрофессионализм',
  description: 'Сообщество профессионалов наивысшей степени: АрхиПрофессионалов - это официальный Партнер Сбербанка',

  themeConfig: {
    docsDir: 'docs',
    
    editLinks: true,
    editLinkText: 'Внести изменение страницы на GitHub',
    lastUpdated: 'Версия от ',

    //algolia: {
      //apiKey: 'c57105e511faa5558547599f120ceeba',
      //indexName: 'vitepress'
    //},

    //carbonAds: {
      //carbon: 'CEBDT27Y',
      //custom: 'CKYD62QM',
      //placement: 'vuejsorg'
    //},

    nav: [
      { text: 'О нас', link: '/' },
      { text: 'Манифест', link: '/all' },
      { text: 'Услуги', link: '/services' },
      { text: 'Контакты', link: '/contact' }
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/config/': getConfigSidebar(),
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: 'АрхиПрофессионалы', link: '/'
    },{
      text: 'УСЛУГИ', link: '/services',
      children: [
        { text: 'Сертификация', link: '/hyundai-15d-7e' },
        { text: 'Само', link: '/hyundai-18d-7e' },
        { text: 'Признание', link: '/hyundai-20da-7e' },
      ]
    },
    {
      text: 'Архипрофессионалы',
      children: [
        { text: 'Hyundai 15D-7E', link: '/hyundai-15d-7e' },
        { text: 'Hyundai 18D-7E', link: '/hyundai-18d-7e' },
        { text: 'Hyundai 20DA-7E', link: '/hyundai-20da-7e' },
        { text: 'Hyundai 25D-7E', link: '/hyundai-25d-7e' },
        { text: 'Hyundai 30D-7SA', link: '/hyundai-30d-7sa' },
        { text: 'Hyundai 30D-9E', link: '/hyundai-30d-9e' },
        { text: 'Hyundai 25DT-7', link: '/hyundai-25dt-7' },
        { text: 'Hyundai 30DT-7', link: '/hyundai-30dt-7' },
        { text: 'Hyundai 33DT-7', link: '/hyundai-33dt-7' },
        { text: 'Hyundai 35D-9F', link: '/hyundai-35d-9f' },
        { text: 'Hyundai 30D-7E', link: '/hyundai-30d-7e' },
        { text: 'Hyundai 35D-9K', link: '/hyundai-35d-9k' },
        { text: 'Hyundai 35D-9S', link: '/hyundai-35d-9s' },
        { text: 'Hyundai 40D-9F', link: '/hyundai-40d-9f' },
        { text: 'Hyundai 40D-9K', link: '/hyundai-40d-9k' }
      ]
    },
    {
      text: 'Статьи о погрузчиках',
      children: [
        { text: 'Права на вилочный погрузчик', link: '/rights_article' },
        { text: 'Как выбрать вилочный погрузчик', link: '/choice_article' },
        { text: 'Справочник по погрузчикам', link: '/guide' },
        { text: 'Бензиновые погрузчики', link: '/petrol_article' },
        { text: 'Газовые погрузчики', link: '/gas_article' }
      ]
    },
    { text: 'Контакты', link: '/contact' }
  ]
}

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }]
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' },
        { text: 'Carbon Ads', link: '/config/carbon-ads' }
      ]
    }
  ]
}
