import { Story, Meta } from '@storybook/angular/types-6-0';

import center from './decorators/center';

import { ResultComponent } from '../app/result.component';

export default {
  title: 'Voting/Result',
  component: ResultComponent,
  decorators: [center],
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<ResultComponent> = (args: ResultComponent) => ({
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
