import { useVoting } from 'hooks/useVoting';

import VotingCard from './components/VotingCard';
import Form from './components/Form';

function App() {
  const { isEditing: shouldFormAppear } = useVoting();

  return shouldFormAppear ? <Form /> : <VotingCard />;
}

export default App;
