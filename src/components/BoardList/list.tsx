import React, { ReactElement, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import { IIsOnState, IrootState, IBoard } from "../../store/_type";
import { reqDeleteBoard } from "../../store/_action/board";
import { reqUpdateIsOn } from "../../store/_action/isOn";

interface ListProps {
    board: IBoard;
}

export default function List({ board }: ListProps): ReactElement {
    const dispatch = useDispatch();
    const isOn: IIsOnState = useSelector((state: IrootState) => state.isOn);
    const useStyles = makeStyles({
        listWrapper: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#ffffff",
            fontWeight: 500,
            fontSize: "1.2em",
            width: "100%",
            height: "2.5em",
            padding: ".5em",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "#334280",
            },
        },
        selectedList: {
            backgroundColor: "#334280",
        },
        deleteBtn: {
            color: "#7e889a",
        },
    });
    const handleBoardOn = (e: MouseEvent) => {
        e.preventDefault();
        dispatch(reqUpdateIsOn(board.name, board.timestamp));
    };
    const handleDeleteBoard = (e: MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        if (window.confirm("정말 삭제하시겠습니까?")) {
            dispatch(reqDeleteBoard(board.timestamp));
        }
    };
    const classes = useStyles();
    return (
        <li
            id={`${board.timestamp}`}
            className={
                isOn.boardId === board.timestamp
                    ? `${classes.listWrapper} ${classes.selectedList}`
                    : `${classes.listWrapper}`
            }
            key={`boardIndex-${board.index}`}
            onClick={handleBoardOn}
        >
            {board.name}
            <CloseIcon
                className={classes.deleteBtn}
                onClick={handleDeleteBoard}
            />
        </li>
    );
}
