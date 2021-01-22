import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import { IrootState, IBoard } from "../../store/_type";
import { reqCreateBoard } from "../../store/_action/board";
import List from "./List";

function BoardList(): React.ReactElement {
    const dispatch = useDispatch();
    const boardLists = useSelector((state: IrootState) => state.board.boards);
    const useStyles = makeStyles({
        list: {
            background: "#1F284D",
            width: "18rem",
            height: "100%",
            padding: "0",
        },
        addBtn: {
            border: "none",
            backgroundColor: "transparent",
            marginTop: ".5em",
            fontSize: "1.8em",
            color: "#ffffff",
            width: "100%",
            cursor: "pointer",
            "&:hover": {
                color: "#495fb6",
            },
        },
    });

    const handleAddBoard = () => {
        dispatch(reqCreateBoard());
    };

    const classes = useStyles();
    return (
        <Paper className={classes.list}>
            <ul>
                {boardLists.map((board: IBoard, i: number) => (
                    <List key={i} board={board} />
                ))}
            </ul>
            <AddIcon className={classes.addBtn} onClick={handleAddBoard} />
        </Paper>
    );
}

export default BoardList;
