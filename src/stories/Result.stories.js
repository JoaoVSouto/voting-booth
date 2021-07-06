import Center from './decorators/Center.svelte';

import Result from '../Result.svelte';

export default {
  title: 'Voting/Result',
  component: Result,
  decorators: [() => Center],
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = ({ ...args }) => ({
  Component: Result,
  props: {
    ...args,
    className: 'text-gray-900',
  },
});

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
