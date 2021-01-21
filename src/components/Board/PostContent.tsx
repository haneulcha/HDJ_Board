import React, { ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { PostProps } from "./Post";
import { reqUpdatePost } from "../../store/_action/post";

export default function PostContent({ post }: PostProps): ReactElement {
    const dispatch = useDispatch();
    const [editable, setEditable] = useState(false);

    const useStyles = makeStyles({
        content: {
            width: "100%",
            cursor: "auto",
            height: "calc(100% - 35px)",
        },
    });
    const classes = useStyles();

    return (
        <>
            <div className={classes.content}>
                {editable ? (
                    <Formik
                        initialValues={{
                            content: post.content,
                        }}
                        onSubmit={(values, actions) => {
                            actions.setSubmitting(false);
                        }}
                    >
                        {({ handleChange, values }) => (
                            <Form>
                                {editable && (
                                    <Field
                                        id="content"
                                        name="content"
                                        as="textarea"
                                        placeholder="내용을 입력하세요"
                                        values={values.content}
                                        onChange={handleChange}
                                        onBlur={() => {
                                            dispatch(
                                                reqUpdatePost({
                                                    ...post,
                                                    ...values,
                                                })
                                            );
                                            setEditable(false);
                                        }}
                                    />
                                )}
                            </Form>
                        )}
                    </Formik>
                ) : (
                    <div
                        className={classes.content}
                        onClick={() => setEditable(true)}
                    >
                        {post.content.split("\n").map((line, i) => {
                            return (
                                <span key={i}>
                                    {line}
                                    <br />
                                </span>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
}
