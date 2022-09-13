import { defineConfig } from "vite";
import path from "path";

const libName = "storyblok-react";

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, "index.ts"),
        name: "storyblokReact",
        fileName: (format) =>
          format === "es" ? `${libName}.mjs` : `${libName}.js`,
      },
      rollupOptions: {
        external: ["react", "axios"],
        output: {
          globals: { react: "React" },
        },
      },
    },
  };
});
