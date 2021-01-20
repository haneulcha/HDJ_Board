import React, { ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Board from "./components/Board";
import BoardList from "./components/BoardList";
import { reqGetBoardList } from "./store/_action/board";
import { reqGetIsOn } from "./store/_action/isOn";

function App(): ReactElement {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reqGetBoardList());
        dispatch(reqGetIsOn());
    }, []);

    return (
        <div className="App">
            <BoardList />
            <Board />
        </div>
    );
}

export default App;
