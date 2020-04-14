export default [
  {
    id: 1,
    type: 'hero',
    name: 'Skeggis',
    description: 'Hönnun og útfærlsa á vefsíðum og Android/iOS öppum. Fagmannleg vinnubrögð á viðráðanlegu verði',
    image: '',
    button: {
      type: 'hero',
      text: 'Hafa samband'
    },
  },
  {
    id: 2,
    type: 'project',
    image: 'ispan.png',
    name: 'Íspan',
    description: 'Íspan er leiðandi fyrirtæki í sölu og framleiðslu glera og spegla. Fyrirtækið býður upp á sérsmíði sem hægt er að panta í gegnum pöntunarkerfi',
    pointers: [
      'asdf',
      'asdf'
    ],
    backgroundColor: '#04c2d6',
    recommendation: {
      name: 'Einar þór Harðarsson',
      position: 'Framkvæmdarstjóri Íspan',
      text: 'Ég mæli hiklaust með þau hjá Skeggis. Vefsíðan mín kom vel út og þau gátu gert allt sem ég gat ímyndað mér',
      image: 'Einar.jpg'
    },
    buttons: [
      {
        type: 'website',
        url: 'https://ispan.is',
        text: 'Skoða vefsíðu'
      }
    ],
    bullets:[
      'Vefsíða',
      'Pöntunarkerfi'
    ]
  },
  {
    id: 3,
    type: 'project',
    name: 'LivePoints',
    image: 'livepoints.png',
    backgroundColor: '#3F51B5',
    description: 'Livepoints er hugbúnaðarlausn fyrir að halda utan um og birta í rauntíma stöðu badmintonleikja. Lausnin hefur verið notað á stórmótum á Íslandi',
    buttons: [
      {
        id: 1,
        type: 'app',
        url: 'https://play.google.com/store/apps/details?id=net.livepoints.livepoints&hl=en',
        text: 'Android'
      },
      {
        id: 2,
        type: 'app',
        url: 'https://apps.apple.com/is/app/live-points/id1485862857',
        text: 'iOS'
      },
      {
        id: 3,
        type: 'website',
        url: 'https://livepoints.net',
        text: 'Skoða vefsíðu'
      },
    ],
    bullets: [
      'Vefsíða',
      'Android/iOS app',
      'Rauntíma niðurstöður'
    ],
    recommendation: {
      text: 'asdf sadf asdælkf jasædlfk aælsd jfælsadk jfæaslkd jfælsakdj fælaskjd f',
      name: 'Einar Þór Harðarsson',
      image: 'Einar.jpg',
      position: 'framkvæmdarstjóri íspan'
    }
  },
  {
    id: 4,
    type: 'project',
    name: 'Vrúmm',
    image: 'vrumm.png',
    description: 'Vrúmm er vettvangur fyrir fólk sem vill kaupa eða selja bíla. Þar geta notendur sett upp auglýsingu fyrir bíl eða leitað að draumabílnum sínum',
    buttons: [
      {
        id: 1,
        type: 'app',
        text: 'Android',
        url: 'https://play.google.com/store/apps/details?id=is.davidpxn.projectcar&hl=en'
      },
      {
        id: 2,
        type: 'app',
        text: 'iOS',
        url: 'https://apps.apple.com/is/app/vrúmm-bílaapp/id1450758357'
      }
    ],
    bullets: [
      'Android/iOS app',
      'Rauntíma spjallkerfi'
    ],
    backgroundColor: '#76B26B'
  },
  {
    id: 5,
    type: 'project',
    name: 'ChiroTix',
    image: 'chirotix.png',
    description: 'Chirotix er miðasala á viðburði fyrir kírópraktora. Viðburðahaldarar geta sett upp viðburð og kerfið sér um sölu miðanna.',
    buttons: [
      {
        id: 1,
        type: 'inprogress',
        text: 'Í þróun',
        url: ''
      }
    ],
    backgroundColor: '#169fe6',
    bullets: [
      'Vefsíða',
      'Miðasala'
    ]
  },
  {
    id: 6,
    type: 'contact',
    backgroundColor: '#FFB400',
    button: {
      type: 'submit',
      text: 'Senda',
      url: ''
    }
  }
]