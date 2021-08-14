import { ComponentStory, ComponentMeta } from '@storybook/react';

import center from './decorators/center';
import withVotingProvider from './decorators/withVotingProvider';

import Booth from '../components/Booth';

export default {
  title: 'Voting/Booth',
  component: Booth,
  decorators: [center, withVotingProvider],
} as ComponentMeta<typeof Booth>;

const Template: ComponentStory<typeof Booth> = args => <Booth {...args} />;

export const FirstExample = Template.bind({});
FirstExample.storyName = 'Sim/Não';
