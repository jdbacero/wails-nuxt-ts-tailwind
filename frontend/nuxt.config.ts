import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // TypeScript integration
  typescript: {
    strict: true,
    typeCheck: true,
  },

  // Required for Wails integration
  ssr: false,

  // Tailwind import
  css: ["~/assets/css/main.css"],

  // Configure build output for Wails
  app: {
    baseURL: "./", // Relative paths for assets
    buildAssetsDir: "/_nuxt/", // Default Nuxt build directory
  },

  // Additional build configuration for Wails
  vite: {
    resolve: {
      alias: {
        wailsjs: "/wailsjs",
      },
    },
    build: {
      target: "esnext",
      minify: "esbuild",
      rollupOptions: {
        // Tell Vite to externalize wailsjs imports
        external: [/^wailsjs\/.*/],
      },
    },
    optimizeDeps: {
      // Exclude wailsjs from dependency optimization
      exclude: ["wailsjs"],
    },
    plugins: [tailwindcss()],
  },

  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/icon"],
});
