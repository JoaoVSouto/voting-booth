import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultComponent } from './result.component';
import { BoothComponent } from './booth.component';

@NgModule({
  declarations: [AppComponent, ResultComponent, BoothComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
