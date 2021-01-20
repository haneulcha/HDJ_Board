import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { IPost, IrootState } from "../../store/_type";
import { reqCreatePost } from "../../store/_action/post";
import { getNewTimeStamp } from "../../utils/localstorage";

function Board(): ReactElement {
    const dispatch = useDispatch();
    const isOn: number = useSelector((state: IrootState) => state.isOn.isOn);
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
                    boardId: isOn,
                    timestamp: getNewTimeStamp(),
                };

                dispatch(reqCreatePost(newPost));
            }}
        >
            보드
            {posts.map((post: IPost, i: number) => (
                <Post post={post} key={`post-key-${i}`} />
            ))}
        </section>
    );
}

export default Board;
