import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Rnd } from "react-rnd";

import { IPost } from "../../store/_type";
import { reqUpdatePost } from "../../store/_action/post";
import PostTitle from "./PostTitle";
import PostContent from "./PostContent";

export interface PostProps {
    post: IPost;
}

export default function Post({ post }: PostProps): ReactElement {
    // const postRef = useRef<HTMLDivElement>(null); // TODO: 필요없을지도
    const dispatch = useDispatch();

    const useStyles = makeStyles({
        post: {
            position: "absolute",
            background: "#ffffff",
            padding: "0",
        },
    });

    const classes = useStyles();

    return (
        <>
            <Rnd
                className={classes.post}
                position={{ x: post.position.x, y: post.position.y }}
                size={{
                    width: post.size.width,
                    height: post.isOpen ? post.size.height : "35px",
                }}
                onDragStop={(e, d) => {
                    console.log(d.x, d.y);
                    dispatch(
                        reqUpdatePost({ ...post, position: { x: d.x, y: d.y } })
                    );
                }}
                onResizeStop={(e, direction, ref, delta) => {
                    console.log(delta);
                    dispatch(
                        reqUpdatePost({
                            ...post,
                            size: {
                                width: post.size.width + delta.width,
                                height: post.size.height + delta.height,
                            },
                        })
                    );
                }}
                minWidth={100}
                bounds="window"
            >
                <PostTitle post={post} />
                {post.isOpen && <PostContent post={post} />}
            </Rnd>
        </>
    );
}
