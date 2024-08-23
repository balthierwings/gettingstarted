import React from 'react';
import ReactDOM from 'react-dom/client';
import GameOfLife from './GameOfLife';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GameOfLife />
  </React.StrictMode>
);