import { Injectable } from '@angular/core';

import { Vote } from '../types/Vote';

type VotingDataPayload = {
  title: string;
  votes: Vote[];
};

@Injectable({
  providedIn: 'root',
})
export class VotingService {
  title = 'Segue o relator?';
  votes: Vote[] = [
    {
      option: 'Sim',
      count: 8,
    },
    {
      option: 'Não',
      count: 12,
    },
  ];
  isEditing = true;

  setVotingData({ title, votes }: VotingDataPayload) {
    this.title = title;
    this.votes = votes;
    this.isEditing = false;
  }

  incrementCountOn(option: string) {
    this.votes = this.votes.map((vote) => ({
      ...vote,
      count: vote.option === option ? vote.count + 1 : vote.count,
    }));
  }
}
