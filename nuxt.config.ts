// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  plugins: ['~/plugins/bootstrap.client.ts'], // 플러그인 명시 등록
});
