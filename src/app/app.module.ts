import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResultComponent } from './result.component';
import { BoothComponent } from './booth.component';
import { VotingCardComponent } from './votingCard.component';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    BoothComponent,
    VotingCardComponent,
    FormComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
