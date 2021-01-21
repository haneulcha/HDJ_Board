import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { IrootState, IBoard } from "../../store/_type";
import { reqCreateBoard } from "../../store/_action/board";
import List from "./list";

const useStyles = makeStyles({
    list: {
        background: "#245675",
        width: "18rem",
        height: "100%",
        padding: "0",
    },
    addBtn: {
        border: "none",
        backgroundColor: "transparent",
        fontSize: "1.8em",
        color: "#ffffff",
        width: "100%",
        cursor: "pointer",
    },
});

function BoardList(): React.ReactElement {
    const dispatch = useDispatch();
    const boardLists = useSelector((state: IrootState) => state.board.boards);

    const classes = useStyles();

    const handleAddBoard = () => {
        dispatch(reqCreateBoard());
    };

    return (
        <Paper className={classes.list}>
            <ul>
                {boardLists.map((board: IBoard, i: number) => (
                    <List key={i} board={board} />
                ))}
            </ul>

            <button className={classes.addBtn} onClick={handleAddBoard}>
                ＋
            </button>
        </Paper>
    );
}

export default BoardList;
