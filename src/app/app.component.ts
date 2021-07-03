import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<booth [options]="options" (vote)="onVote($event)"></booth>',
})
export class AppComponent {
  votes = [
    {
      option: 'Sim',
      count: 8,
    },
    {
      option: 'Não',
      count: 12,
    },
  ];

  get options() {
    return this.votes.map((vote) => vote.option);
  }

  onVote(option: string) {
    console.log(option);
  }
}
