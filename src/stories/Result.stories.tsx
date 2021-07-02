import { ComponentStory, ComponentMeta } from '@storybook/react';

import center from './decorators/center';

import Result from '../components/Result';

export default {
  title: 'Voting/Result',
  component: Result,
  decorators: [center],
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
FirstVote.args = {
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
};

export const SecondVote = Template.bind({});
SecondVote.storyName = 'Votação 2';
SecondVote.args = {
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
};
