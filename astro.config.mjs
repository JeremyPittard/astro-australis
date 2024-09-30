// @ts-check
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  experimental: {
    env: {
      schema: {
        SWAUS_KEY: envField.string({
          context: "server",
          access: "secret",
          optional: false,
        }),
        SWAUS_URL: envField.string({
          context: "server",
          access: "public",
          optional: false,
        }),
        BZ_URL: envField.string({
          context: "server",
          access: "public",
          optional: false,
        }),
        PUBLIC_BMAC_URL: envField.string({
          context: "client",
          access: "public",
          optional: true,
        }),
      },
    },
  },
});
