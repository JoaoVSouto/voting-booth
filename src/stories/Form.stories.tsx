import { ComponentStory, ComponentMeta } from '@storybook/react';

import center from './decorators/center';
import withVotingProvider from './decorators/withVotingProvider';

import Form from '../components/Form';

export default {
  title: 'Voting/Form',
  component: Form,
  decorators: [center, withVotingProvider],
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => <Form />;

export const FirstExample = Template.bind({});
FirstExample.storyName = 'Formulário';
