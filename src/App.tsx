import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux'

import './App.css';
import Board from './components/Board';
import BoardList from './components/BoardList';
import { requestBoardList } from './store/_action/board';


function App():ReactElement {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestBoardList()), [dispatch]}
  )

  return (
    <div className="App">
      <BoardList />
      <Board />
    </div>
  );
}

export default App;
