import { Component, Input } from '@angular/core';

import { Vote } from '../types/Vote';

type VotingStates = 'open' | 'closed';

@Component({
  selector: 'voting-card',
  template: `
    <div class="bg-gray-600 max-w-max p-6 flex flex-col rounded">
      <h1 class="font-bold text-2xl mb-4 text-gray-100">{{ title }}</h1>

      <div class="flex justify-center">
        <booth
          *ngIf="state === 'open'"
          [options]="options"
          (vote)="handleVote($event)"
        ></booth>
        <result *ngIf="state === 'closed'" [votes]="votes"></result>
      </div>
    </div>
  `,
})
export class VotingCardComponent {
  @Input() votes!: Vote[];
  @Input() title!: string;
  @Input() state: VotingStates = 'open';

  get options() {
    return this.votes.map((vote) => vote.option);
  }

  incrementCountOn(option: string) {
    this.votes = this.votes.map((vote) => ({
      ...vote,
      count: vote.option === option ? vote.count + 1 : vote.count,
    }));
  }

  handleVote(option: string) {
    this.state = 'closed';
    this.incrementCountOn(option);
  }
}
