import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { Rnd } from "react-rnd";
import { PostProps, firstEditProps } from ".";

import { reqUpdatePost } from "../../store/_action/post";
import PostTitle from "./PostTitle";
import PostContent from "./PostContent";

export default function Post({
    post,
    edit,
}: PostProps & firstEditProps): ReactElement {
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
                    dispatch(
                        reqUpdatePost({ ...post, position: { x: d.x, y: d.y } })
                    );
                }}
                onResizeStop={(e, direction, ref, delta) => {
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
                <Formik
                    initialValues={{
                        title: post.title,
                        content: post.content,
                    }}
                    onSubmit={(values, actions) => {
                        actions.setSubmitting(false);
                    }}
                >
                    {(formikProps) => (
                        <>
                            <PostTitle
                                post={post}
                                {...formikProps}
                                edit={edit}
                            />
                            {post.isOpen && (
                                <PostContent
                                    post={post}
                                    {...formikProps}
                                    edit={edit}
                                />
                            )}
                        </>
                    )}
                </Formik>
            </Rnd>
        </>
    );
}
