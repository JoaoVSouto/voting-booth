import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultComponent } from './result.component';
import { BoothComponent } from './booth.component';
import { VotingCardComponent } from './votingCard.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    BoothComponent,
    VotingCardComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
