import React, { ReactElement, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import { reqDeleteBoard } from "../../store/_action/board";
import { reqUpdateIsOn } from "../../store/_action/isOn";
import { IBoard } from "../../store/_type";

interface ListProps {
    board: IBoard;
}

export default function List({ board }: ListProps): ReactElement {
    const dispatch = useDispatch();
    const useStyles = makeStyles({
        listItem: {
            width: "100%",
            height: "2.5em",
            color: "#ffffff",
            fontWeight: 500,
            fontSize: "1.2em",
            padding: "10px 5px",
            cursor: "pointer",
        },
    });
    const handleBoardOn = (e: MouseEvent) => {
        e.preventDefault();
        dispatch(reqUpdateIsOn(board.name, board.timestamp));
    };
    const handleDeleteBoard = (e: MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(reqDeleteBoard(board.timestamp));
    };
    const classes = useStyles();
    return (
        <>
            <li
                id={`${board.timestamp}`}
                className={classes.listItem}
                key={`boardIndex-${board.index}`}
                onClick={handleBoardOn}
            >
                {board.name}
                <CloseIcon onClick={handleDeleteBoard} />
            </li>
        </>
    );
}
