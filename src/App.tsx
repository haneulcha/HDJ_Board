import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import Board from "./components/Board";
import BoardList from "./components/BoardList";
import { IrootState } from "./store/_type";
import { reqGetBoardList } from "./store/_action/board";
import { reqGetIsOn } from "./store/_action/isOn";
import { reqGetPosts } from "./store/_action/post";

function App(): ReactElement {
    const dispatch = useDispatch();
    const isOn: number = useSelector((state: IrootState) => state.isOn.isOn);

    useEffect(() => {
        dispatch(reqGetBoardList());
        dispatch(reqGetIsOn());
        dispatch(reqGetPosts(isOn));
    }, []);

    return (
        <div className="App">
            <BoardList />
            <Board />
        </div>
    );
}

export default App;
