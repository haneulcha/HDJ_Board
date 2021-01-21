import React, { ReactElement, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { IIsOnState, IPost, IrootState } from "../../store/_type";
import { reqCreatePost } from "../../store/_action/post";
import { getNewTimeStamp } from "../../utils/localstorage";
import BoardName from "./BoardName";
import Post from "./Post";

const useStyles = makeStyles({
    board: {
        background: "#ecf4f9",
        border: 1,
        width: "100%",
        height: "100%",
        padding: "0",
    },
});

function Board(): ReactElement {
    const dispatch = useDispatch();
    const isOn: IIsOnState = useSelector((state: IrootState) => state.isOn);
    const posts: Array<IPost> = useSelector(
        (state: IrootState) => state.post.posts
    );
    const boardRef = useRef<HTMLDivElement>(null);

    const classes = useStyles();

    function handleDbclick(e: React.MouseEvent): void {
        e.preventDefault();
        console.log("doubleclick");
        const elRect = boardRef.current?.getBoundingClientRect();
        if (elRect) {
            const relX = e.clientX - elRect.left;
            const relY = e.clientY - elRect.top;
            console.log(relX, relY);

            const newPost = {
                title: "새 포스트",
                content: "새 메모",
                position: { x: relX, y: relY },
                size: { width: 200, height: 180 },
                boardId: isOn.boardId,
                timestamp: getNewTimeStamp(),
            };
            dispatch(reqCreatePost(newPost));
        }
    }

    return (
        <Paper className={classes.board}>
            <div
                ref={boardRef}
                className="wrapper"
                onDoubleClick={handleDbclick}
            >
                <BoardName />
                {posts.map((post: IPost, i: number) => (
                    <Post post={post} key={`post-key-${i}`} />
                ))}
            </div>
        </Paper>
    );
}

export default Board;
