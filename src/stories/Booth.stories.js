import Center from './decorators/Center.svelte';

import Booth from '../Booth.svelte';

export default {
  title: 'Voting/Booth',
  component: Booth,
  decorators: [() => Center],
};

const Template = ({ ...args }) => ({
  Component: Booth,
  props: args,
});

export const FirstExample = Template.bind({});
FirstExample.storyName = 'Sim/Não';
FirstExample.args = {
  options: ['Sim', 'Não'],
};

export const SecondExample = Template.bind({});
SecondExample.storyName = 'Sim/Não/Talvez';
SecondExample.args = {
  options: ['Sim', 'Não', 'Talvez'],
};
