// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/supabase",
  ],

  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      include: undefined,
      exclude: ["/"],
      cookieRedirect: false,
    },
  },

  vite: {
    server: {
      hmr: {
        port: 3008,
      },
    },
  },

  colorMode: {
    classSuffix: "",
  },
  devtools: { enabled: true },
  /**
   * Shadcn configuration
   */
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
