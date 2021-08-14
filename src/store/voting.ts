import { reactive, readonly } from 'vue';

import { Vote } from '@/types/Vote';

type AuthData = {
  title: string;
  votes: Vote[];
  isEditing: boolean;
};

type AuthDataMutation = {
  title: string;
  votes: Vote[];
};

const state = reactive<AuthData>({
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

export default function useVoting() {
  return readonly(state);
}

export function setVotingData({ title, votes }: AuthDataMutation) {
  state.title = title;
  state.votes = votes;
  state.isEditing = false;
}

export function incrementCountOn(option: string) {
  const vote = state.votes.find(vote => vote.option === option);

  if (!vote) {
    return;
  }

  vote.count += 1;
}
