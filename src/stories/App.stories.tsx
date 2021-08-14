import { ComponentStory, ComponentMeta } from '@storybook/react';

import center from './decorators/center';
import withVotingProvider from './decorators/withVotingProvider';

import App from '../App';

export default {
  title: 'Voting/App',
  component: App,
  decorators: [center, withVotingProvider],
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const FirstExample = Template.bind({});
FirstExample.storyName = 'Fluxo completo';
