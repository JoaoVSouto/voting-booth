import center from './decorators/center';

import App from '../App.vue';

export default {
  title: 'Voting/App',
  component: App,
  decorators: [center],
};

const Template = args => ({
  components: { App },
  setup() {
    return { args };
  },
  template: '<App v-bind="args" />',
});

export const FirstExample = Template.bind({});
FirstExample.storyName = 'Fluxo completo';
