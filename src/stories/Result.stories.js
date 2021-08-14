import center from './decorators/center';

import Result from '../components/Result.vue';

export default {
  title: 'Voting/Result',
  component: Result,
  decorators: [center],
};

const Template = args => ({
  components: { Result },
  setup() {
    return { args };
  },
  template: '<Result v-bind="args" class="text-gray-900" />',
});

export const FirstVote = Template.bind({});
FirstVote.storyName = 'Votação 1';
