import React, { ReactElement } from 'react';

import './App.css';
import Board from './components/Board';
import BoardList from './components/BoardList';

function App():ReactElement {
  return (
    <div className="App">
      <BoardList />
      <Board />
    </div>
  );
}

export default App;
