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
        { text: 'Сертификация', link: '/404' },
        { text: 'Само Определение', link: '/404' },
        { text: 'Признание', link: '/404' },
        { text: 'Мероприятия', link: '/404' },
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
        { text: 'Агропромышленный комплекс Персоны ', link: '/arhi-pro-' },
        { text: 'PR Персоны ', link: '/arhi-pro-pr' },
        { text: 'HoReCa Персоны', link: '/arhi-pro-horeca' }
      ]
    },
    {
      text: 'Архипрофессиональные организации',
      children: [
        { text: 'Автосервисы_мойки_стоянки', link: '/arhi-pro-article' },
        { text: 'Безопасность_охрана', link: '/arhi-pro-article' },
        { text: 'Бизнес_финансы_страхование_маркетинг', link: '/arhi-pro-article' },
        { text: 'Бумага_тара_упаковка', link: '/arhi-pro-article' },
        { text: 'Деревообработка_лес', link: '/arhi-pro-article' },
        { text: 'Компьютеры_офиснаятехника_ПО', link: '/arhi-pro-article' },
        { text: 'Красотаиздоровье', link: '/arhi-pro-article' },
        { text: 'Легкаяпромышленность_товарынародногопотребления', link: '/arhi-pro-article' },
        { text: 'Машиностроениеиоборудование', link: '/arhi-pro-article' },
        { text: 'Медицина_фармакология', link: '/arhi-pro-article' },
        { text: 'Металлыиметаллоизделия', link: '/arhi-pro-article' },
        { text: 'Наука_исследования_образование', link: '/arhi-pro-article' },
        { text: 'Недвижимость', link: '/arhi-pro-article' },
        { text: 'Офис_дом', link: '/arhi-pro-article' },
        { text: 'Полиграфия_реклама', link: '/arhi-pro-article' },
        { text: 'Продуктыпитания_напитки_табак', link: '/arhi-pro-article' },
        { text: 'Розничнаяторговля', link: '/arhi-pro-article' },
        { text: 'Связьикоммуникации', link: '/arhi-pro-article' },
        { text: 'Сельскоехозяйство_охота_рыболовство', link: '/arhi-pro-article' },
        { text: 'Спорт_отдых_туризм_культура', link: '/arhi-pro-article' },
        { text: 'Строительныематериалы_изделия', link: '/arhi-pro-article' },
        { text: 'Строительство', link: '/arhi-pro-article' },
        { text: 'Сырье', link: '/arhi-pro-article' },
        { text: 'ТопливоиЭнергетика', link: '/arhi-pro-article' },
        { text: 'Транспорт', link: '/arhi-pro-article' },
        { text: 'Услуги', link: '/arhi-pro-article' },
        { text: 'Химическаяпромышленность', link: '/arhi-pro-article' },
        { text: 'Экология_охранаприроды_уборкатерриторий', link: '/arhi-pro-article' },
        { text: 'Электротехника', link: '/arhi-pro-article' },
        { text: 'Основнойвиддеятельностинеопределен', link: '/arhi-pro-article' },
        { text: 'Перевозки_логистика_таможня', link: '/arhi-pro-article' }
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
