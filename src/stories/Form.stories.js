import Center from './decorators/Center.svelte';

import Form from '../Form.svelte';

export default {
  title: 'Voting/Form',
  component: Form,
  decorators: [() => Center],
};

const Template = ({ ...args }) => ({
  Component: Form,
  props: args,
});

export const FirstExample = Template.bind({});
FirstExample.storyName = 'Formulário';
