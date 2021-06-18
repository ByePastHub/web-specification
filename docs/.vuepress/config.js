module.exports = {
  title: '起妙前端开发手册',
  description: '',
  dest: './dist',
  base: process.env.NODE_ENV === 'development' ? '/' : '/web-specification/',
  port: '3333',
  head: [
    ['link', {rel: 'icon', href: './favicon.ico'}]
  ],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: '中文', // 将会被设置为 <html> 的 lang 属性
      title: '起妙前端开发手册',
      description: '---'
    },
    '/us/': {
      lang: 'English',
      title: '起妙前端开发手册',
      description: 'Vue-powered Static Site Generator'
    }
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       'public': './public/'
  //     }
  //   }
  // },
  themeConfig: {
    nav: [
      {
        text: '主页', link: '/pages/webSpecification/class.md',
      }
    ],
    sidebar: {
      '/pages/': [
        {
          title: '前端开发规范',
          collapsable: false,
          children: [
            { title: 'class', path:'webSpecification/class'},
            { title: 'JavaScript', path:'webSpecification/javaScript'},
            { title: '关于注释', path:'webSpecification/aboutAnnotations'},
            { title: '关于图标', path:'webSpecification/aboutIconfont'},
            { title: '项目构建', path:'webSpecification/cli'}
          ]
        },
        {
          title: '其他',
          collapsable: false,
          children: [
            {
              title: '知识点',
              path:'/pages/other/knowledgePoints',
              collapsable: true,
              children: [
                { title: 'Vue3.0', path:'other/knowledgePoints/vue3'},
                { title: 'TypeScript', path:'other/knowledgePoints/typeScript'},
                { title: 'ES6', path:'other/knowledgePoints/es6'},
              ]
            },
            {
              title: 'Bugger',
              path:'/pages/other/issues',
              collapsable: true,
              children: [
                {}
              ]
            },
          ]
        }
      ]
    }
  }
}