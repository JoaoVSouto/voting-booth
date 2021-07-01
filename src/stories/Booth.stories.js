import center from './decorators/center';

import Booth from '../components/Booth.vue';

export default {
  title: 'Voting/Booth',
  component: Booth,
  decorators: [center],
};

const Template = args => ({
  components: { Booth },
  setup() {
    return { args };
  },
  template: '<Booth v-bind="args" />',
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
