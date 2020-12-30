export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",
  loading: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "cssforu",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // Doc: https://github.com/nuxt-community/color-mode-module
    "@nuxtjs/color-mode",
    // Doc: https://github.com/nuxt-community/tailwindcss-module
    "@nuxtjs/tailwindcss"
  ],
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  purgeCSS: {
    whitelist: ["dark-mode"]
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Defaults options
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {}
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
