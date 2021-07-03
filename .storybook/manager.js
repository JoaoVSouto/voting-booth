import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Cabine de votação - Angular",
    brandImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png",
  }),
});
