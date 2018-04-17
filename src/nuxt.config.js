module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt.js APP Playground Firebase',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  buildDir: '../public/functions/nuxt',
  build: {
    publicPath: '/assets/',
    /*
    ** Run ESLint on save
    */
   babel: {
      presets: [
        'env',
        'stage-0'
      ],
      plugins: [
        ["transform-runtime", {
          polyfill: true,
          regenerator: true
        }],
      ]
    },
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    ['@nuxtjs/pwa', { icon: false }]
  ],
  manifest: {
    name: 'Nuxt.js Firebase Playground',
    lang: 'ja'
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://nuxt-firebase-playground.firebaseapp.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: {
          cacheName: 'custom-cache',
          cacheExpiration: {
              maxEntries: 10,
              maxAgeSeconds: 300
          }
        }
      }
    ]
  }
}
