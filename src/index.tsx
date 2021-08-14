import React from 'react';
import ReactDOM from 'react-dom';

import { VotingProvider } from 'contexts/VotingContext';

import App from './App';

import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <VotingProvider>
      <App />
    </VotingProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
