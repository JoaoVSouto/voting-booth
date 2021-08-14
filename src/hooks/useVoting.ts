import * as React from 'react';

import { VotingContext } from 'contexts/VotingContext';

export function useVoting() {
  const context = React.useContext(VotingContext);

  if (!context) {
    throw new Error('useVoting must be used within a VotingProvider');
  }

  return context;
}
