import { StoryFnAngularReturnType } from '@storybook/angular/dist/ts3.9/client/preview/types';

const center = (story: () => StoryFnAngularReturnType) => ({
  ...story(),
  template: `<section class="flex justify-center">${
    story().template
  }</section>`,
});

export { center as default };
