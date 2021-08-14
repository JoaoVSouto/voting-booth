import cx from 'classnames';

import { useVoting } from 'hooks/useVoting';

type BoothProps = {
  onVote?: (option: string) => void;
};

export default function Booth({ onVote = () => {} }: BoothProps) {
  const { votes } = useVoting();

  const options = votes.map(vote => vote.option);

  return (
    <>
      {options.map((option, index) => (
        <button
          key={option}
          type="button"
          className={cx(
            'transition-all',
            'bg-gray-800',
            'hover:bg-gray-900',
            'text-gray-200',
            'rounded',
            'p-2',
            { 'ml-3': index > 0 }
          )}
          onClick={() => onVote(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
}
