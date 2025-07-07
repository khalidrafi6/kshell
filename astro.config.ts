import { loadEnv } from "vite";
import { defineConfig } from "astro/config";

import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import spectre from "./package/src";

import node from "@astrojs/node";
import { spectreDark } from "./src/ec-theme";

// const {
//   GISCUS_REPO,
//   GISCUS_REPO_ID,
//   GISCUS_CATEGORY,
//   GISCUS_CATEGORY_ID,
//   GISCUS_MAPPING,
//   GISCUS_STRICT,
//   GISCUS_REACTIONS_ENABLED,
//   GISCUS_EMIT_METADATA,
//   GISCUS_LANG
// } = loadEnv(process.env.NODE_ENV!, process.cwd(), "");

// https://astro.build/config
const config = defineConfig({
  site: "https://blog.khalidrafi.me",
  output: "static",
  i18n: {
    locales: ["en", "bn"],
    defaultLocale: "bn",
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: {
        bn: "খালিদ",
        en: "Khalid",
      },
      openGraph: {
        bn: {
          home: {
            title: "খালিদের শেল",
            description: "খালিদের প্রযুক্তি চর্চার ময়দান",
          },
          articles: {
            title: "লেখাসমূহ",
            description:
              "খালিদের তরফ থেকে প্রযুক্তি বিষয়ক টিউটোরিয়াল, পরামর্শ ও কৌশল, সমস্যার সমাধান",
          },
          services: {
            title: "সার্ভিস",
            description: "সূলভ মূল্যে প্রযুক্তি সার্ভিস নিন খালিদের কাছ থেকে",
          },
        },
        en: {
          home: {
            title: "Khalid's Shell",
            description: "The playground for Khalid's tech expertise",
          },
          articles: {
            title: "Articles",
            description: "Tech Tutorials, Tips and Troubleshooting from Khalid",
          },
          services: {
            title: "Services",
            description: "Get IT services from Khalid at affordable price",
          },
        },
      },
      // giscus: {
      //   repository: GISCUS_REPO,
      //   repositoryId: GISCUS_REPO_ID,
      //   category: GISCUS_CATEGORY,
      //   categoryId: GISCUS_CATEGORY_ID,
      //   mapping: GISCUS_MAPPING as any,
      //   strict: GISCUS_STRICT === "true",
      //   reactionsEnabled: GISCUS_REACTIONS_ENABLED === "true",
      //   emitMetadata: GISCUS_EMIT_METADATA === "true",
      //   lang: GISCUS_LANG,
      // }
    }),
  ],
  adapter: node({
    mode: "standalone",
  }),
});

export default config;
