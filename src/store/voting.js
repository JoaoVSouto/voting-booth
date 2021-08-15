import { writable } from 'svelte/store';

export const voting = writable({
  title: 'Segue o relator?',
  votes: [
    {
      option: 'Sim',
      count: 8,
    },
    {
      option: 'Não',
      count: 12,
    },
  ],
  isEditing: true,
});

export function setVotingData({ title, votes }) {
  voting.set({
    isEditing: false,
    title,
    votes,
  });
}

export function incrementCountOn(option) {
  voting.update(state => ({
    ...state,
    votes: state.votes.map(vote => ({
      ...vote,
      count: vote.option === option ? vote.count + 1 : vote.count,
    })),
  }));
}
