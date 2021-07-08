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
FirstVoting.storyName = 'Segue o relator';
FirstVoting.args = {
  votes: [
    {
      option: 'Sim',
      count: 8,
    },
    {
      option: 'Não',
      count: 12,
    },
  ],
  state: 'open',
  title: 'Segue o relator?',
};

export const SecondVoting = Template.bind({});
SecondVoting.storyName = 'Continuamos amanhã?';
SecondVoting.args = {
  votes: [
    {
      option: 'Sim',
      count: 8,
    },
    {
      option: 'Talvez',
      count: 6,
    },
    {
      option: 'Não',
      count: 3,
    },
  ],
  state: 'closed',
  title: 'Continuamos amanhã?',
};
