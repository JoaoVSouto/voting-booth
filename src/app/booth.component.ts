import { Component, EventEmitter, Output } from '@angular/core';

import { VotingService } from './voting.service';

@Component({
  selector: 'booth',
  template: `
    <button
      type="button"
      *ngFor="let option of options; index as i"
      [ngClass]="[
        'transition-all bg-gray-800 hover:bg-gray-900 text-gray-200 rounded p-2',
        i > 0 ? 'ml-3' : ''
      ]"
      (click)="vote.emit(option)"
    >
      {{ option }}
    </button>
  `,
})
export class BoothComponent {
  @Output() vote = new EventEmitter<string>();

  constructor(private votingService: VotingService) {}

  get options() {
    return this.votingService.votes.map((vote) => vote.option);
  }
}
