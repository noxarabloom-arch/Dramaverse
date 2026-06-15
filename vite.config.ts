// NOTE: @lovable.dev/vite-tanstack-config wraps tanstackStart, viteReact,
// tailwindcss, tsConfigPaths, and nitro — do NOT add these separately
// or the build will break with duplicate plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Explicitly declare entry points so the build resolves correctly
    // on any host outside Lovable Cloud.
    entries: {
      router: "./src/router",
      server: "./src/server",
      client: "./src/start",
    },
    server: { entry: "server" },
  },
  // Use Netlify's Node.js SSR runtime (not Cloudflare Workers)
  nitro: {
    preset: "netlify",
  },
  // Disable the "Built with Lovable" dev badge
  componentTagger: false,
});
