import Booth from './components/Booth';

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
  const options = votes.map(vote => vote.option);

  function handleVote(option: string) {
    console.log(option);
  }

  return <Booth options={options} onVote={handleVote} />;
}

export default App;
