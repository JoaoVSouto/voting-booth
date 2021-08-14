import { ComponentStory, ComponentMeta } from '@storybook/react';

import center from './decorators/center';
import withVotingProvider from './decorators/withVotingProvider';

import Result from '../components/Result';

export default {
  title: 'Voting/Result',
  component: Result,
  decorators: [center, withVotingProvider],
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Result>;

const Template: ComponentStory<typeof Result> = args => (
  <Result {...args} className="text-gray-900" />
);

export const FirstVote = Template.bind({});
FirstVote.storyName = 'Votação 1';
