import cx from 'classnames';

type BoothProps = {
  options: string[];
  onVote: (option: string) => void;
};

export default function Booth({ options, onVote }: BoothProps) {
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
