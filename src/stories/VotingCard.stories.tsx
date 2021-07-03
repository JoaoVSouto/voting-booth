import { ComponentStory, ComponentMeta } from '@storybook/react';

import center from './decorators/center';

import VotingCard from '../components/VotingCard';

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
} as ComponentMeta<typeof VotingCard>;

const Template: ComponentStory<typeof VotingCard> = args => (
  <VotingCard {...args} />
);

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
