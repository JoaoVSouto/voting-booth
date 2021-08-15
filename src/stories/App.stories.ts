import { FormsModule } from '@angular/forms';
import { Story, Meta } from '@storybook/angular/types-6-0';

import center from './decorators/center';

import { AppComponent } from '../app/app.component';
import { ResultComponent } from '../app/result.component';
import { BoothComponent } from '../app/booth.component';
import { VotingCardComponent } from '../app/votingCard.component';
import { FormComponent } from '../app/form.component';

export default {
  title: 'Voting/App',
  component: AppComponent,
  decorators: [center],
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
  moduleMetadata: {
    declarations: [
      ResultComponent,
      BoothComponent,
      VotingCardComponent,
      FormComponent,
    ],
    imports: [FormsModule],
  },
});

export const FirstExample = Template.bind({});
FirstExample.storyName = 'Formulário';
