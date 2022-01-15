module.exports = {
  lang: 'ru-RU',
  title: 'БЮРО ПРОЦЕССНОГО ИНЖИНИРИНГА',
  description: 'Мы продаём складскую и дорожно-строительную технику, навесное оборудование и запчасти Компания ООО «БПИ» - Партнёр Hyundai, Toyota, Doosan, ТСМ, Nichiyu, Maximal',

  themeConfig: {
    docsDir: 'docs',
    
    editLinks: false,
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
      { text: 'Погрузчики и Оборудование', link: '/all' },
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
      text: 'BPI', link: '/'
    },{
      text: 'УСЛУГИ', link: '/services'
    },
    {
      text: 'Погрузчики Hyundai',
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
      text: 'Погрузчики Toyota',
      children: [
        { text: 'Toyota 8FD18/8FDF18', link: '/toyota-8fd188fdf18' },
        { text: 'Toyota 62-8FD18', link: '/toyota-62-8fd18' },
        { text: 'Toyota 62-8FD20', link: '/toyota-62-8fd20' },
        { text: 'Toyota 62-7FD20', link: '/toyota-62-7fd20' },
        { text: 'Toyota 62-7FD25', link: '/toyota-62-7fd25' },
        { text: 'Toyota 62-8FD25', link: '/toyota-62-8fd25' },
        { text: 'Toyota 8FD25/8FDF25', link: '/toyota-8fd258fdf25' },
        { text: 'Toyota 62-7FD30', link: '/toyota-62-7fd30' },
        { text: 'Toyota 62-8FD30', link: '/toyota-62-8fd30' },
        { text: 'Toyota 8FD30/8FDF30', link: '/toyota-8fd308fdf30' },
        { text: 'Toyota 02-7FD35', link: '/toyota-02-7fd35' },
        { text: 'Toyota 02-7FDJ35', link: '/toyota-02-7fdj35' },
        { text: 'Toyota 72-8FDJ35', link: '/toyota-72-8fdj35' }
      ]
    },
    {
      text: 'Кабины',
      children: [
        { text: 'Кабина цельнометаллическая', link: '/kabina-tselnometallicheskaya' },
        { text: 'Мягкая кабина', link: '/myagkaya-kabina' }
      ]
    },
    {
      text: 'Навесное оборудование',
      children: [
        { text: 'Вилы паллетные для минипогрузчика', link: '/vili-palletnie-dlya-minipogruzchika' },
        { text: 'Вилы откидные на нижнюю кромку ковша', link: '/vili-otkidnie-na-nizhnyuyu-kromku-kovsha' },
        { text: 'Вилы откидные экскаватора-погрузчика', link: '/vili-otkidnie-ekskavatora-pogruzchika' },
        { text: 'Вилы паллетные на фронтальный погрузчик', link: '/vili-palletnie-na-frontalnii-pogruzchik' },
        { text: 'Щетки поворотные с диаметром ворса 550 мм', link: '/schetki-povorotnie-s-diametrom-vorsa-550' },
        { text: 'Щетки поворотные с диаметром ворса 800 мм', link: '/schetki-povorotnie-s-diametrom-vorsa-800' },
        { text: 'Отвал снегоуборочный', link: '/otval-snegouborochnii' },
        { text: 'Отвалы для уборки снега на вилочный погрузчик', link: '/otvali-dlya-uborki-snega-na-vilochnii-pogruzchik' },
        { text: 'Щетки с бункером и диаметром ворса 550мм', link: '/schetki-s-bunkerom-i-diametrom-vorsa-550' },
        { text: 'Щетки с бункером и диаметром ворса 800мм', link: '/schetki-s-bunkerom-i-diametrom-vorsa-800' },
        { text: 'Толкательная щётка на вилочный погрузчик', link: '/tolkatelnaya-schyotka-na-vilochnii-pogruzchik' },
        { text: 'Щётка на вилочный погрузчик с механическим поворотом', link: '/schyotka-na-vilochnii-pogruzchik-s-mehan' },
        { text: 'Щётка на вилочный погрузчик с бункером', link: '/schyotka-na-vilochnii-pogruzchik-s-bunkerom' },
        { text: 'Роторный снегоочиститель', link: '/rotornii-snegoochistitel' },
        { text: 'Скрепер', link: '/skreper' },
        { text: 'Люлька', link: '/lyulka' },
        { text: 'Фреза', link: '/freza' },
        { text: 'Кирковщик', link: '/kirkovschik' },
        { text: 'Пескоразбрасыватель', link: '/peskorazbrasivatel' },
        { text: 'Вилы для круглого леса', link: '/vili-dlya-kruglogo-lesa' },
        { text: 'Шнековый бур', link: '/shnekovii-bur' },
        { text: 'Механическое зажимное устройство', link: '/mehanicheskoe-zazhimnoe-ustroistvo' },
        { text: 'Механическое быстросъемное устройство', link: '/mehanicheskoe-bistrosemnoe-ustroistvo' },
        { text: 'Передний прицеп трактора', link: '/perednii-pritsep-traktora' }
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
