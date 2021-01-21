import React, { ReactElement, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { IPost } from "../../store/_type";
import { reqUpdatePost } from "../../store/_action/post";

interface PostProps {
    post: IPost;
}

export default function Post({ post }: PostProps): ReactElement {
    const dispatch = useDispatch();
    const [editable, setEditable] = useState({ title: false, content: false });
    const postRef = useRef<HTMLDivElement>(null); // TODO: 필요없을지도

    const useStyles = makeStyles({
        post: {
            position: "absolute",
            background: "#ffffff",
            padding: "0",
            left: post.position.x,
            top: post.position.y,
            width: post.size.width,
            height: post.size.height,
        },
        formWrapper: {
            display: "flex",
            flexDirection: "column",
        },
        title: {
            color: "#fffff",
            backgroundColor: "#bae8e8",
            width: "100%",
            height: "2em",
        },
        content: {
            width: "100%",
        },
    });

    const classes = useStyles();

    return (
        <Paper ref={postRef} className={classes.post}>
            <Formik
                initialValues={{
                    title: post.title,
                    content: post.content,
                }}
                onSubmit={(values, actions) => {
                    actions.setSubmitting(false);
                }}
            >
                {({
                    handleChange,

                    values,
                }) => (
                    <Form className={classes.formWrapper}>
                        {editable.title ? (
                            <Field
                                id="title"
                                name="title"
                                className={classes.title}
                                placeholder="제목을 입력하세요"
                                values={values.title}
                                onChange={handleChange}
                                onBlur={() => {
                                    dispatch(
                                        reqUpdatePost({ ...post, ...values })
                                    );
                                    setEditable({ ...editable, title: false });
                                }}
                            />
                        ) : (
                            <span
                                className={classes.title}
                                onClick={() =>
                                    setEditable({ ...editable, title: true })
                                }
                            >
                                {post.title}
                            </span>
                        )}
                        {editable.content ? (
                            <Field
                                id="content"
                                name="content"
                                className={classes.content}
                                placeholder="메모를 작성하세요"
                                as="textarea"
                                rows={10}
                                values={values.content}
                                onChange={handleChange}
                                onBlur={() => {
                                    dispatch(
                                        reqUpdatePost({ ...post, ...values })
                                    );
                                    setEditable({
                                        ...editable,
                                        content: false,
                                    });
                                }}
                            />
                        ) : (
                            <span
                                className={classes.content}
                                onClick={() =>
                                    setEditable({ ...editable, content: true })
                                }
                            >
                                {post.content}
                            </span>
                        )}
                    </Form>
                )}
            </Formik>
        </Paper>
    );
}
