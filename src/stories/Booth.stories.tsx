import { ComponentStory, ComponentMeta } from '@storybook/react';

import center from './decorators/center';

import Booth from '../components/Booth';

export default {
  title: 'Voting/Booth',
  component: Booth,
  decorators: [center],
} as ComponentMeta<typeof Booth>;

const Template: ComponentStory<typeof Booth> = args => <Booth {...args} />;

export const FirstExample = Template.bind({});
FirstExample.storyName = 'Sim/Não';
FirstExample.args = {
  options: ['Sim', 'Não'],
};

export const SecondExample = Template.bind({});
SecondExample.storyName = 'Sim/Não/Talvez';
SecondExample.args = {
  options: ['Sim', 'Não', 'Talvez'],
};
