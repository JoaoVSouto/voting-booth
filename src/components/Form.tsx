import * as React from 'react';
import cx from 'classnames';

import { useVoting } from 'hooks/useVoting';

type OptionError = {
  index: number;
  error: string;
};

export default function Form() {
  const { setVotingData } = useVoting();

  const [title, setTitle] = React.useState('');
  const [titleError, setTitleError] = React.useState('');
  const [options, setOptions] = React.useState(['', '']);
  const [optionsErrors, setOptionsErrors] = React.useState<OptionError[]>([]);

  const dynamicOptions = React.useMemo(() => options.slice(2), [options]);

  function validateFields() {
    let hasError = false;
    setTitleError('');
    setOptionsErrors([]);

    if (!title.trim()) {
      hasError = true;
      setTitleError('Campo obrigatório');
    } else if (title.trim().length < 4) {
      hasError = true;
      setTitleError('É necessário ao menos 4 caracteres');
    }

    options.slice(0, 2).forEach((option, index) => {
      if (!option.trim()) {
        hasError = true;
        setOptionsErrors(state => [
          ...state,
          { index, error: 'Campo obrigatório' },
        ]);
      }
    });

    return hasError;
  }

  function handleBoothConfiguration(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (validateFields()) {
      return;
    }

    setVotingData({
      title,
      votes: options.filter(Boolean).map(option => ({
        option,
        count: 0,
      })),
    });
  }

  function handleOptionChange(index: number) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const updatedOptions = [...options];

      updatedOptions[index] = e.target.value;

      setOptions(updatedOptions);
    };
  }

  function handleAddNewOption() {
    setOptions(state => [...state, '']);
  }

  return (
    <form
      className="bg-gray-600 flex flex-col max-w-max rounded p-6"
      onSubmit={handleBoothConfiguration}
    >
      <h1 className="font-bold text-2xl mb-4 text-gray-100">
        Configuração da cabine de votação
      </h1>

      <label htmlFor="title" className="text-gray-100 mb-1">
        Título
      </label>
      <input
        id="title"
        type="text"
        className="rounded px-2 py-1"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      {titleError && <span className="text-red-400">{titleError}</span>}

      <label className="text-gray-100 mt-3 mb-1">Opções</label>
      <input
        type="text"
        className="rounded px-2 py-1 flex-1"
        placeholder="Opção 1"
        value={options[0]}
        onChange={handleOptionChange(0)}
      />
      {optionsErrors.some(option => option.index === 0) && (
        <span className="text-red-400">
          {optionsErrors.find(option => option.index === 0)?.error}
        </span>
      )}
      <input
        type="text"
        className="rounded px-2 py-1 flex-1 mt-2"
        placeholder="Opção 2"
        value={options[1]}
        onChange={handleOptionChange(1)}
      />
      {optionsErrors.some(option => option.index === 1) && (
        <span className="text-red-400">
          {optionsErrors.find(option => option.index === 1)?.error}
        </span>
      )}

      {dynamicOptions.map((option, index) => (
        <input
          type="text"
          className="rounded px-2 py-1 flex-1 mt-2"
          placeholder={`Opção ${index + 3}`}
          value={option}
          onChange={handleOptionChange(index + 2)}
        />
      ))}

      <div className="flex justify-end mt-2">
        <button
          type="button"
          className={cx(
            'transition-all',
            'bg-gray-800',
            'hover:bg-gray-900',
            'text-gray-200',
            'rounded',
            'py-1',
            'px-2'
          )}
          onClick={handleAddNewOption}
        >
          Add+
        </button>
      </div>

      <hr className="mt-3" />

      <button
        type="submit"
        className={cx(
          'mt-3',
          'transition-all',
          'bg-green-600',
          'hover:bg-green-700',
          'text-white',
          'rounded',
          'py-1',
          'px-2'
        )}
      >
        Salvar
      </button>
    </form>
  );
}
