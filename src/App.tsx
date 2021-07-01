import Result from './components/Result';

function App() {
  const votes = [
    {
      option: 'Sim',
      count: 16,
    },
    {
      option: 'Não',
      count: 12,
    },
  ];

  return <Result votes={votes} />;
}

export default App;
