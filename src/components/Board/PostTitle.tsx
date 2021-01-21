import React, { ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
import { PostProps } from "./Post";
import { reqUpdatePost } from "../../store/_action/post";

export default function PostTitle({ post }: PostProps): ReactElement {
    const dispatch = useDispatch();
    const [editable, setEditable] = useState(false);
    // const [openContent, setOpenContent] = useState(true);
    const { title } = post;

    const useStyles = makeStyles({
        titleWrapper: {
            display: "flex",
            backgroundColor: "#bae8e8",
            color: "#fffff",

            width: "100%",
            height: "35px",
        },
        title: {
            width: "70%",
            cursor: "auto",
        },
        expandBtn: {
            cursor: "pointer",
        },
        closeBtn: {
            cursor: "pointer",
        },
    });
    const classes = useStyles();

    return (
        <>
            <div className={classes.titleWrapper}>
                {editable ? (
                    <Formik
                        initialValues={{
                            title: post.title,
                        }}
                        onSubmit={(values, actions) => {
                            actions.setSubmitting(false);
                        }}
                    >
                        {({ handleChange, values }) => (
                            <Form>
                                {editable && (
                                    <Field
                                        id="title"
                                        name="title"
                                        className={classes.title}
                                        placeholder="제목을 입력하세요"
                                        values={values.title}
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
                        className={classes.title}
                        onClick={() => setEditable(true)}
                    >
                        {title}
                    </div>
                )}
                {post.isOpen ? (
                    <ExpandLessIcon
                        className={classes.expandBtn}
                        onClick={() => {
                            dispatch(
                                reqUpdatePost({
                                    ...post,
                                    isOpen: false,
                                })
                            );
                        }}
                    />
                ) : (
                    <ExpandMoreIcon
                        className={classes.expandBtn}
                        onClick={() => {
                            dispatch(
                                reqUpdatePost({
                                    ...post,
                                    isOpen: true,
                                })
                            );
                        }}
                    />
                )}

                <CloseIcon className={classes.closeBtn} />
            </div>
        </>
    );
}
