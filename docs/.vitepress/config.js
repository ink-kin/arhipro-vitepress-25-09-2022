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
      { text: 'Манифест', link: '/manifest' },
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
        { text: 'Услуги', link: '/services' },
        { text: 'Сертификация', link: '/404' },
        { text: 'Само Определение', link: '/404' },
        { text: 'Признание', link: '/404' },
        { text: 'Мероприятия', link: '/404' },
        { text: 'Банк', link: '/404' },
        { text: 'Консультации', link: '/404' },
        { text: 'Юридическая защита', link: '/404' },
        { text: 'Сувенирная продукция', link: '/store' },
      ]
    },
    {
      text: 'Архипрофессионалы',
      children: [
        { text: 'СМИ Персоны ', link: '/arhi-pro-media' },
        { text: 'Ритейл Персоны ', link: '/arhi-pro-retail' },
        { text: 'Персонал Персоны ', link: '/arhi-pro-personal' },
        { text: 'Образование Персоны ', link: '/arhi-pro-obrazovan' },
        { text: 'Парки и заповедники Персоны ', link: '/arhi-pro-park' },
        { text: 'НКО Персоны ', link: '/arhi-pro-nko' },
        { text: 'Наука Персоны ', link: '/arhi-pro-nauka' },
        { text: 'Металлургия Персоны ', link: '/arhi-pro-metalurg' },
        { text: 'Медицина Персоны ', link: '/arhi-pro-medik' },
        { text: 'Машиностроение Персоны ', link: '/arhi-pro-mashinostroy' },
        { text: 'Маркетинг Персоны ', link: '/arhi-pro-marketing' },
        { text: 'Логистика Персоны ', link: '/arhi-pro-logistic' },
        { text: 'Лесная и деревообрабатывающая промышленность Персоны ', link: '/arhi-pro-forest' },
        { text: 'Культура Персоны ', link: '/arhi-pro-kultura' },
        { text: 'Консалтинг Персоны ', link: '/arhi-pro-consalt' },
        { text: 'Книгоиздание Персоны ', link: '/arhi-pro-books' },
        { text: 'ИТ Персоны ', link: '/arhi-pro-info-tech' },
        { text: 'Выставочная деятельность Персоны ', link: '/arhi-pro-expo' },
        { text: 'ВПК Персоны ', link: '/arhi-pro-vpk' },
        { text: 'Безопасность Персоны ', link: '/arhi-pro-bezopasnost' },
        { text: 'Банки Персоны ', link: '/arhi-pro-banks' },
        { text: 'Алкоголь Персоны ', link: '/arhi-pro-alko' },
        { text: 'Агропромышленный комплекс Персоны ', link: '/arhi-pro-agro' },
        { text: 'PR Персоны ', link: '/arhi-pro-pr' },
        { text: 'HoReCa Персоны', link: '/arhi-pro-horeca' }
      ]
    },
    {
      text: 'Архипрофессиональные организации',
      children: [
        { text: 'Автосервисы мойки стоянки', link: '/arhi-pro-article' },
        { text: 'Безопасность охрана', link: '/arhi-pro-article' },
        { text: 'Бизнес финансы страхование маркетинг', link: '/arhi-pro-article' },
        { text: 'Бумага тара упаковка', link: '/arhi-pro-article' },
        { text: 'Деревообработка лес', link: '/arhi-pro-article' },
        { text: 'Компьютеры офиснаятехника ПО', link: '/arhi-pro-article' },
        { text: 'Красотаиздоровье', link: '/arhi-pro-article' },
        { text: 'Легкаяпромышленность товарынародногопотребления', link: '/arhi-pro-article' },
        { text: 'Машиностроениеиоборудование', link: '/arhi-pro-article' },
        { text: 'Медицина фармакология', link: '/arhi-pro-article' },
        { text: 'Металлыиметаллоизделия', link: '/arhi-pro-article' },
        { text: 'Наука исследования образование', link: '/arhi-pro-article' },
        { text: 'Недвижимость', link: '/arhi-pro-article' },
        { text: 'Офис дом', link: '/arhi-pro-article' },
        { text: 'Полиграфия реклама', link: '/arhi-pro-article' },
        { text: 'Продуктыпитания напитки табак', link: '/arhi-pro-article' },
        { text: 'Розничнаяторговля', link: '/arhi-pro-article' },
        { text: 'Связьикоммуникации', link: '/arhi-pro-article' },
        { text: 'Сельскоехозяйство охота рыболовство', link: '/arhi-pro-article' },
        { text: 'Спорт отдых туризм культура', link: '/arhi-pro-article' },
        { text: 'Строительныематериалы изделия', link: '/arhi-pro-article' },
        { text: 'Строительство', link: '/arhi-pro-article' },
        { text: 'Сырье', link: '/arhi-pro-article' },
        { text: 'ТопливоиЭнергетика', link: '/arhi-pro-article' },
        { text: 'Транспорт', link: '/arhi-pro-article' },
        { text: 'Услуги', link: '/arhi-pro-article' },
        { text: 'Химическаяпромышленность', link: '/arhi-pro-article' },
        { text: 'Экология охранаприроды уборкатерриторий', link: '/arhi-pro-article' },
        { text: 'Электротехника', link: '/arhi-pro-article' },
        { text: 'Основнойвиддеятельностинеопределен', link: '/arhi-pro-article' },
        { text: 'Перевозки логистика таможня', link: '/arhi-pro-article' }
      ]
    },
    {
      text: 'Статьи',
      children: [
        { text: 'Права на  ', link: '/404' },
        { text: 'Как выбрать  ', link: '/404' },
        { text: 'Справочник  ', link: '/404' },
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
