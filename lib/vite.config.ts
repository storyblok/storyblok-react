import { defineConfig } from "vite";
import path from "path";

const libName = "storyblok-react";

export default defineConfig({
  build: {
    lib: {
      entry: [
        path.resolve(__dirname, "index.ts"),
        path.resolve(__dirname, "rsc/index.ts"),
      ],
      name: "storyblokReact",
      fileName: (format) =>
        format === "es" ? `${libName}.mjs` : `${libName}.js`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: { react: "React" },
      },
    },
  },
});
