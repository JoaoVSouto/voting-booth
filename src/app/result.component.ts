import { Component, Input } from '@angular/core';

import { Vote } from '../types/Vote';

@Component({
  selector: 'result',
  template: `
    <ol class="list-decimal text-gray-200">
      <li *ngFor="let vote of parsedVotes">
        {{ vote.option }} - {{ vote.count }} votos ({{ vote.rate }}%)
      </li>
    </ol>
  `,
})
export class ResultsComponent {
  @Input() votes!: Vote[];

  get parsedVotes() {
    const totalVotes = this.votes.reduce(
      (totalVotes, vote) => totalVotes + vote.count,
      0
    );
    const orderedVotes = [...this.votes].sort((a, b) => b.count - a.count);
    const parsedVotes = orderedVotes.map((vote) => ({
      ...vote,
      rate: Math.round((vote.count * 100) / totalVotes),
    }));

    return parsedVotes;
  }
}
