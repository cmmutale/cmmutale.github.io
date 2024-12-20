import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://cmmutale.github.io',
  base: 'cmmutale',
  integrations: [tailwind()]
});