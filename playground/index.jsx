import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Teaser from "./components/teaser";
import Grid from "./components/grid";
import Page from "./components/page";
import Feature from "./components/feature";
import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: "OurklwV5XsDJTIE1NJaD2wtt",
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    page: Page,
  },
});

ReactDOM.render(<App />, document.getElementById("root"));
