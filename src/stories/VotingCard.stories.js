import center from './decorators/center';

import VotingCard from '../components/VotingCard.vue';

export default {
  title: 'Voting/VotingCard',
  component: VotingCard,
  decorators: [center],
  argTypes: {
    state: {
      options: ['open', 'closed'],
      control: { type: 'radio' },
    },
  },
};

const Template = args => ({
  components: { VotingCard },
  setup() {
    return { args };
  },
  template: '<VotingCard v-bind="args" />',
});

export const FirstVoting = Template.bind({});
FirstVoting.storyName = 'Segue o relator? (1)';
FirstVoting.args = {
  state: 'open',
};

export const SecondVoting = Template.bind({});
SecondVoting.storyName = 'Segue o relator? (2)';
SecondVoting.args = {
  state: 'closed',
};
