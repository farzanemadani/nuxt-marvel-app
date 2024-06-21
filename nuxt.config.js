export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    ssr: true ,
    title: 'marvel-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/tailwind.css','~/assets/css/font-style.css','~/assets/css/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/axiosConfig.js'
    { src: '~/plugins/axiosConfig.js', ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxt/image',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath:'/dist/',
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
          // Other plugins you might be using
        },
      },
    },
    loaders: {
      scss: {
        implementation: require('sass'),
      },
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\\.(woff2?|eot|ttf|otf)(\\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000, // 1kB
          name: 'fonts/[name].[hash:7].[ext]',
          publicPath: '/_nuxt/'
        }
      })
    }
  },
  serverMiddleware: [
  ],
  // generate: {
  //   dir: 'dist',
  // }
}
