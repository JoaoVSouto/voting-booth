import VotingCard from './components/VotingCard';

function App() {
  const votes = [
    {
      option: 'Sim',
      count: 8,
    },
    {
      option: 'Não',
      count: 12,
    },
  ];

  return <VotingCard title="Segue o relator?" votes={votes} />;
}

export default App;
