import center from './decorators/center';

import Form from '../components/Form.vue';

export default {
  title: 'Voting/Form',
  component: Form,
  decorators: [center],
};

const Template = args => ({
  components: { Form },
  setup() {
    return { args };
  },
  template: '<Form v-bind="args" />',
});

export const FirstExample = Template.bind({});
FirstExample.storyName = 'Formulário';
