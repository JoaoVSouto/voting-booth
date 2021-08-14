import { ComponentStory, ComponentMeta } from '@storybook/react';

import center from './decorators/center';
import withVotingProvider from './decorators/withVotingProvider';

import VotingCard from '../components/VotingCard';

export default {
  title: 'Voting/VotingCard',
  component: VotingCard,
  decorators: [center, withVotingProvider],
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
FirstVoting.storyName = 'Segue o relator? (1)';
FirstVoting.args = {
  state: 'open',
};

export const SecondVoting = Template.bind({});
SecondVoting.storyName = 'Segue o relator? (2)';
SecondVoting.args = {
  state: 'closed',
};
