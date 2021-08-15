import Center from './decorators/Center.svelte';

import VotingCard from '../VotingCard.svelte';

export default {
  title: 'Voting/VotingCard',
  component: VotingCard,
  decorators: [() => Center],
  argTypes: {
    state: {
      options: ['open', 'closed'],
      control: { type: 'radio' },
    },
  },
};

const Template = ({ ...args }) => ({
  Component: VotingCard,
  props: args,
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
