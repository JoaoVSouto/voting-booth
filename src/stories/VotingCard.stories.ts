import { Story, Meta } from '@storybook/angular/types-6-0';

import center from './decorators/center';

import { VotingCardComponent } from '../app/votingCard.component';
import { BoothComponent } from '../app/booth.component';
import { ResultComponent } from '../app/result.component';

export default {
  title: 'Voting/VotingCard',
  component: VotingCardComponent,
  decorators: [center],
  argTypes: {
    state: {
      options: ['open', 'closed'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<VotingCardComponent> = (args: VotingCardComponent) => ({
  props: args,
  moduleMetadata: {
    declarations: [BoothComponent, ResultComponent],
  },
});

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
