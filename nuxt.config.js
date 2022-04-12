import axios from "axios";

export default {
  generate: {
    async routes() {
      const pages = await axios
        .get("https://oxfltt73hd.microcms.io/api/v1/blog?limit=100", {
          headers: {
            "X-MICROCMS-API-KEY": "27e68099d285450482d22ddc24cd7e9428d9",
          },
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/${content.id}`,
            payload: content,
          }))
        );
      return pages;
    },
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "microcms-nuxt-jamstack-blog",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["bootstrap-vue/nuxt"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
