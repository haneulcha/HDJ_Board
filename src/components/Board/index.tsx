import React, { useEffect, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { IrootState } from "../../store/_type";
import { reqGetPosts } from "../../store/_action/post";

function Board(): ReactElement {
    const dispatch = useDispatch();
    // const isOn: number = useSelector((state: IrootState) => state.isOn.isOn);

    // useEffect(() => {
    //     dispatch(reqGetPosts(isOn));
    // }, [isOn]);

    return (
        <section
            className="board"
            onDoubleClick={(e) => {
                e.preventDefault();
                console.log("doubleclick");
            }}
        >
            보드
            <Post />
        </section>
    );
}

export default Board;
