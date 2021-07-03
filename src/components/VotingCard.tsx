import * as React from 'react';

import { Vote } from 'types/Vote';

import Booth from './Booth';
import Result from './Result';

type VotingStates = 'open' | 'closed';

type VotingCardProps = {
  votes: Vote[];
  title: string;
  state?: VotingStates;
};

export default function VotingCard({
  title,
  votes,
  state = 'open',
}: VotingCardProps) {
  const [boothVotes, setBoothVotes] = React.useState(votes);
  const [votingState, setVotingState] = React.useState(state);

  const options = React.useMemo(() => boothVotes.map(vote => vote.option), [
    boothVotes,
  ]);

  React.useEffect(() => {
    setVotingState(state);
  }, [state]);

  function incrementCountOn(option: string) {
    setBoothVotes(oldVotes =>
      oldVotes.map(vote => ({
        ...vote,
        count: vote.option === option ? vote.count + 1 : vote.count,
      }))
    );
  }

  function handleVote(option: string) {
    setVotingState('closed');
    incrementCountOn(option);
  }

  return (
    <div className="bg-gray-600 max-w-max p-6 flex flex-col rounded">
      <h1 className="font-bold text-2xl mb-4 text-gray-100">{title}</h1>

      <div className="flex justify-center">
        {votingState === 'open' && (
          <Booth options={options} onVote={handleVote} />
        )}
        {votingState === 'closed' && <Result votes={boothVotes} />}
      </div>
    </div>
  );
}
