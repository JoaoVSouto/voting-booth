import { Story, Meta } from '@storybook/angular/types-6-0';

import center from './decorators/center';

import { BoothComponent } from '../app/booth.component';

export default {
  title: 'Voting/Booth',
  component: BoothComponent,
  decorators: [center],
} as Meta;

const Template: Story<BoothComponent> = (args: BoothComponent) => ({
  props: args,
});

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
