import { devServer } from "@cypress/vite-dev-server";
import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer(devServerConfig) {
      return devServer({
        ...devServerConfig,
        framework: "react",
        viteConfig: require("./vite.config.ts"),
      });
    },
  },
});
