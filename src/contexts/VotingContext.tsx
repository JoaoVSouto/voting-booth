import * as React from 'react';

import { Vote } from 'types/Vote';

type VotingDataPayload = {
  title: string;
  votes: Vote[];
};

type VotingContextData = {
  title: string;
  votes: Vote[];
  isEditing: boolean;
  setVotingData(payload: VotingDataPayload): void;
  incrementCountOn(option: string): void;
};

type VotingProviderProps = {
  children: React.ReactNode;
};

export const VotingContext = React.createContext({} as VotingContextData);

export function VotingProvider({ children }: VotingProviderProps) {
  const [title, setTitle] = React.useState('Segue o relator?');
  const [votes, setVotes] = React.useState<Vote[]>([
    {
      option: 'Sim',
      count: 8,
    },
    {
      option: 'Não',
      count: 12,
    },
  ]);
  const [isEditing, setIsEditing] = React.useState(true);

  function setVotingData({ title, votes }: VotingDataPayload) {
    setTitle(title);
    setVotes(votes);
    setIsEditing(false);
  }

  function incrementCountOn(option: string) {
    setVotes(state =>
      state.map(vote => ({
        ...vote,
        count: vote.option === option ? vote.count + 1 : vote.count,
      }))
    );
  }

  return (
    <VotingContext.Provider
      value={{ isEditing, title, votes, setVotingData, incrementCountOn }}
    >
      {children}
    </VotingContext.Provider>
  );
}
