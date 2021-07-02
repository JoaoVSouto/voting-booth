import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';

const center = (Story: () => StoryFnReactReturnType) => (
  <section className="flex justify-center">
    <Story />
  </section>
);

export { center as default };
