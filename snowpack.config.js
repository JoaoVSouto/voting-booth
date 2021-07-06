/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: ["@snowpack/plugin-svelte", "@snowpack/plugin-dotenv"],
  extends: "@snowpack/app-scripts-svelte",
  scripts: {
    "run:tsc": "tsc --noEmit",
    "run:tsc::watch": "$1 --watch",
    "build:css": "postcss",
  },
  devOptions: {},
  installOptions: {},
  install: [],
  buildOptions: {},
  proxy: {},
  alias: {},
};
