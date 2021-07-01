import { Vote } from 'types/Vote';

type ResultProps = {
  votes: Vote[];
};

export default function Result({ votes }: ResultProps) {
  const totalVotes = votes.reduce(
    (totalVotes, vote) => totalVotes + vote.count,
    0
  );
  const orderedVotes = [...votes].sort((a, b) => b.count - a.count);
  const parsedVotes = orderedVotes.map(vote => ({
    ...vote,
    rate: Math.round((vote.count * 100) / totalVotes),
  }));

  return (
    <ol className="list-decimal text-gray-200">
      {parsedVotes.map(vote => (
        <li key={vote.option}>
          {vote.option} - {vote.count} votos ({vote.rate}%)
        </li>
      ))}
    </ol>
  );
}
