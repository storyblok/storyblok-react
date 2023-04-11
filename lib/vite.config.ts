import { defineConfig } from "vite";
import path from "path";

const libName = "storyblok-react";

export default defineConfig({
  build: {
    lib: {
      entry: [
        path.resolve(__dirname, "index.ts"),
        path.resolve(__dirname, "rsc/index.ts"),
        path.resolve(__dirname, "storyblok-bridge-loader.tsx"),
      ],
      name: "storyblokReact",
      fileName: (format) =>
        format === "es" ? `${libName}.mjs` : `${libName}.js`,
    },
    minify: "terser",
    terserOptions: {
      compress: {
        directives: false,
      },
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: { react: "React" },
        banner: (chunk) =>
          chunk.name === "storyblok-bridge-loader" ? '"use client";' : "",
      },
    },
  },
});
