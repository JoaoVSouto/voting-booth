import { Component, Input } from '@angular/core';

import { VotingService } from './voting.service';

type VotingStates = 'open' | 'closed';

@Component({
  selector: 'voting-card',
  template: `
    <div class="bg-gray-600 max-w-max p-6 flex flex-col rounded">
      <h1 class="font-bold text-2xl mb-4 text-gray-100">
        {{ votingService.title }}
      </h1>

      <div class="flex justify-center">
        <booth *ngIf="state === 'open'" (vote)="handleVote($event)"></booth>
        <result *ngIf="state === 'closed'"></result>
      </div>
    </div>
  `,
})
export class VotingCardComponent {
  @Input() state: VotingStates = 'open';

  constructor(public votingService: VotingService) {}

  handleVote(option: string) {
    this.state = 'closed';
    this.votingService.incrementCountOn(option);
  }
}
