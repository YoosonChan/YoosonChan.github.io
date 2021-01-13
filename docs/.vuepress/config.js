module.exports = {
  title: 'yoosonchan',
  description: 'i am yoosonchan',
  themeConfig: {
    logo: '/assets/img/logo.jpg',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'author', content: 'yoosonchan | 陈土土' }],
      ['meta', { name: 'keywords', content: 'yoosonchan | 技术笔记，艺术思考，生活记录' }]
    ],
    nav: [
      {
        text: '技术',
        link: '/page/tech/',
        items: [
          { text: 'javascript', link: '/pages/tech/javascript' },
          { text: '数据结构', link: '/pages/tech/data-structure' }
        ]
      },
      {
        text: '艺术',
        link: '/page/art',
        items: [
          { text: '电影', link: '/pages/art/film' },
          { text: '摄影', link: '/pages/art/photograph' }
        ]
      },
      { text: '生活', link: '/pages/life/' },
      { text: 'Github', link: 'https://github.com/YoosonChan' }
    ],
    sidebar: {
      '/pages/tech/': [
        '',
        'javascript',
        'data-structure'
      ],
      '/pages/art/': [
        '',
        'film',
        'photograph'
      ]
    },
    lastUpdated: '更新时间'
  }
}