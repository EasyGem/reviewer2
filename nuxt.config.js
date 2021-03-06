require('dotenv').config()

module.exports = {
  // mode: 'spa',
  mode: 'universal',
  generate: {
    routes: ['/company/0', '/company/0/reviews']
  },
  // mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Рейтинг ремонтных компаний в Москве | Ремонт Википедия',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Помогаем найти действительно достойного и проверенного подрядчика, учитывая отзывы и рекомендации клиентов.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['assets/style/main.sass'],

  styleResources: {
    sass: ['assets/style/variables.sass']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/loadOnScroll.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/dotenv',
    'nuxt-dayjs-module',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:1337/',
    browserBaseURL: process.env.BASE_URL || 'http://localhost:1337/'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
