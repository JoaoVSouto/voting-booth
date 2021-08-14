import * as React from 'react';

import { useVoting } from 'hooks/useVoting';

import Booth from './Booth';
import Result from './Result';

type VotingStates = 'open' | 'closed';

type VotingCardProps = {
  state?: VotingStates;
};

export default function VotingCard({ state = 'open' }: VotingCardProps) {
  const { incrementCountOn, title } = useVoting();

  const [votingState, setVotingState] = React.useState(state);

  React.useEffect(() => {
    setVotingState(state);
  }, [state]);

  function handleVote(option: string) {
    setVotingState('closed');
    incrementCountOn(option);
  }

  return (
    <div className="bg-gray-600 max-w-max p-6 flex flex-col rounded">
      <h1 className="font-bold text-2xl mb-4 text-gray-100">{title}</h1>

      <div className="flex justify-center">
        {votingState === 'open' && <Booth onVote={handleVote} />}
        {votingState === 'closed' && <Result />}
      </div>
    </div>
  );
}
