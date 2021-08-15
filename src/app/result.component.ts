import { Component, Input } from '@angular/core';

import { VotingService } from './voting.service';

@Component({
  selector: 'result',
  template: `
    <ol [ngClass]="['list-decimal text-gray-200', className]">
      <li *ngFor="let vote of parsedVotes">
        {{ vote.option }} - {{ vote.count }} votos ({{ vote.rate }}%)
      </li>
    </ol>
  `,
})
export class ResultComponent {
  @Input() className = '';

  constructor(private votingService: VotingService) {}

  get parsedVotes() {
    const totalVotes = this.votingService.votes.reduce(
      (totalVotes, vote) => totalVotes + vote.count,
      0
    );
    const orderedVotes = [...this.votingService.votes].sort(
      (a, b) => b.count - a.count
    );
    const parsedVotes = orderedVotes.map((vote) => ({
      ...vote,
      rate: Math.round((vote.count * 100) / totalVotes),
    }));

    return parsedVotes;
  }
}
