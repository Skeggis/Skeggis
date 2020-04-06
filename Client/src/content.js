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
    description: 'Lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',
    pointers: [
      'asdf',
      'asdf'
    ],
    backgroundColor: '#04c2d6',
    recommendation: {
      name: 'Einar þór Harðarsson',
      position: 'Framkvæmdarstjóri Íspan',
      text: 'Flottir strákar',
      image: ''
    },
    buttons: [
      {
        type: 'website',
        url: 'ispan.is',
        text: 'Skoða vefsíðu'
      }
    ]
  },
  {
    id: 3,
    type: 'project',
    name: 'LivePoints',
    image: 'livepoints.png',
    backgroundColor: '#3F51B5',
    description: 'Lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',
    buttons: [
      {
        id: 1,
        type: 'app',
        url: '',
        text: 'Android'
      },
      {
        id: 2,
        type: 'app',
        url: '',
        text: 'iOS'
      },
      {
        id: 3,
        type: 'website',
        url: 'livepoints.net',
        text: 'Skoða vefsíðu'
      },
    ]
  },
  {
    id: 4,
    type: 'project',
    name: 'Vrúmm',
    image: 'vrumm.png',
    description: 'Lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',
    buttons: [
      {
        id: 1,
        type: 'app',
        text: 'Android',
        url: ''
      },
      {
        id: 2,
        type: 'app',
        text: 'iOS',
        url: ''
      }
    ],
    backgroundColor: '#76B26B'
  },
  {
    id: 5,
    type: 'project',
    name: 'ChiroTix',
    image: 'chirotix.png',
    description: 'Lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',
    buttons: [
      {
        id: 1,
        type: 'website',
        text: 'Skoða vefsíðu',
        url: ''
      }
    ],
    backgroundColor: '#169fe6'
  },
  {
    id: 6,
    type: 'contact',
    backgroundColor: '#c334eb',
    button: {
      type: 'submit',
      text: 'Senda',
      url: ''
    }
  }
]