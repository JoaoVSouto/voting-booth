import { FormsModule } from '@angular/forms';
import { Story, Meta } from '@storybook/angular/types-6-0';

import center from './decorators/center';

import { FormComponent } from '../app/form.component';

export default {
  title: 'Voting/Form',
  component: FormComponent,
  decorators: [center],
} as Meta;

const Template: Story<FormComponent> = (args: FormComponent) => ({
  props: args,
  moduleMetadata: {
    imports: [FormsModule],
  },
});

export const FirstExample = Template.bind({});
FirstExample.storyName = 'Formulário';
