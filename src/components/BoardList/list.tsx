import React, { ReactElement, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { reqDeleteBoard } from "../../store/_action/board";
import { reqUpdateIsOn } from "../../store/_action/isOn";
import { IBoard } from "../../store/_type";

interface ListProps {
    board: IBoard;
}

export default function List({ board }: ListProps): ReactElement {
    const dispatch = useDispatch();

    const handleBoardOn = (e: MouseEvent) => {
        e.preventDefault();
        console.log("now click the list");
        dispatch(reqUpdateIsOn(board.name, board.timestamp));
    };
    const handleDeleteBoard = (e: MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(reqDeleteBoard(board.timestamp));
    };

    return (
        <>
            <li
                id={`${board.timestamp}`}
                key={`boardIndex-${board.index}`}
                onClick={handleBoardOn}
            >
                {board.name}
                <button onClick={handleDeleteBoard}>🗑</button>
            </li>
        </>
    );
}
