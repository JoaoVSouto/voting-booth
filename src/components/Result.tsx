import { useVoting } from 'hooks/useVoting';

type ResultProps = {
  className?: string;
};

export default function Result({ className = '' }: ResultProps) {
  const { votes } = useVoting();

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
    <ol className={`list-decimal text-gray-200 ${className}`}>
      {parsedVotes.map(vote => (
        <li key={vote.option}>
          {vote.option} - {vote.count} votos ({vote.rate}%)
        </li>
      ))}
    </ol>
  );
}
