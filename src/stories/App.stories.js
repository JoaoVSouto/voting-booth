import Center from './decorators/Center.svelte';

import App from '../App.svelte';

export default {
  title: 'Voting/App',
  component: App,
  decorators: [() => Center],
};

const Template = ({ ...args }) => ({
  Component: App,
  props: args,
});

export const FirstExample = Template.bind({});
FirstExample.storyName = 'Fluxo completo';
