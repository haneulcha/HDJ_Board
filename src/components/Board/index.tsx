import React, { ReactElement, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useHotkeys } from "react-hotkeys-hook";
import { IIsOnState, IPost, IrootState } from "../../store/_type";
import { reqCreatePost } from "../../store/_action/post";
import { getNewTimeStamp } from "../../utils/localstorage";
import BoardName from "./BoardName";
import Post from "./Post";

export interface firstEditProps {
    edit: boolean;
}
export interface PostProps {
    post: IPost;
}
export interface FormValues {
    title: string;
    content: string;
}

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
    useHotkeys("ctrl+p, command+p", (event: KeyboardEvent, handler) => {
        event.preventDefault();
        console.log("event", event);
        console.log("handler", handler);
    });
    const boardRef = useRef<HTMLDivElement>(null);

    const classes = useStyles();

    function handleDbclick(e: React.MouseEvent): void {
        e.preventDefault();

        const elRect = boardRef.current?.getBoundingClientRect();
        if (elRect) {
            const relX = e.clientX - elRect.left;
            const relY = e.clientY - elRect.top;

            const newPost = {
                title: "",
                content: "",
                position: { x: relX, y: relY },
                size: { width: 220, height: 180 },
                isOpen: true,
                boardId: isOn.boardId,
                timestamp: getNewTimeStamp(),
                modified: 0,
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
                    <Post
                        post={post}
                        key={`post-key-${i}`}
                        edit={post.modified ? false : true}
                    />
                ))}
            </div>
        </Paper>
    );
}

export default Board;
