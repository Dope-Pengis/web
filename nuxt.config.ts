import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  buildModules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    jit: true
  },
  nitro: {
    preset: "browser",
  },
});
