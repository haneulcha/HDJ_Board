import React, { ReactElement, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHotkeys } from "react-hotkeys-hook";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
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
function Board(): ReactElement {
    const dispatch = useDispatch();
    const isOn: IIsOnState = useSelector((state: IrootState) => state.isOn);
    const posts: Array<IPost> = useSelector(
        (state: IrootState) => state.post.posts
    );
    const boardRef = useRef<HTMLDivElement>(null);

    const useStyles = makeStyles({
        board: {
            background: "#f1f2f4",
            border: 1,
            width: "100%",
            height: "100%",
            padding: "0",
        },
    });

    // create a new post when pressing shortcut
    useHotkeys("ctrl+alt+n, command+alt+n", (event: KeyboardEvent) => {
        event.preventDefault();
        const newPost = {
            title: "",
            content: "",
            position: { x: 200, y: 200 },
            size: { width: 220, height: 180 },
            isOpen: true,
            boardId: isOn.boardId,
            timestamp: getNewTimeStamp(),
            modified: 0,
        };
        dispatch(reqCreatePost(newPost));
    });

    // create a new post when double-clicking the board
    function handleDoubleclick(e: React.MouseEvent): void {
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

    const classes = useStyles();
    return (
        <Paper className={classes.board}>
            <div
                ref={boardRef}
                className="wrapper"
                onDoubleClick={handleDoubleclick}
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
