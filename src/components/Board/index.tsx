import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { IIsOnState, IPost, IrootState } from "../../store/_type";
import { reqCreatePost } from "../../store/_action/post";
import { getNewTimeStamp } from "../../utils/localstorage";

function Board(): ReactElement {
    const dispatch = useDispatch();
    const isOn: IIsOnState = useSelector((state: IrootState) => state.isOn);
    const posts: Array<IPost> = useSelector(
        (state: IrootState) => state.post.posts
    );

    return (
        <section
            className="board"
            onDoubleClick={(e) => {
                e.preventDefault();
                console.log("doubleclick");
                const newPost = {
                    title: "새 포스트",
                    content: "새 메모",
                    location: { long: 100, lat: 100 },
                    size: { width: 50, height: 50 },
                    boardId: isOn.boardId,
                    timestamp: getNewTimeStamp(),
                };

                dispatch(reqCreatePost(newPost));
            }}
        >
            <h1>{isOn.board}</h1>
            {posts.map((post: IPost, i: number) => (
                <Post post={post} key={`post-key-${i}`} />
            ))}
        </section>
    );
}

export default Board;
