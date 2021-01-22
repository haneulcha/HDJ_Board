import React, { ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { Field, FormikProps } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { PostProps, FormValues, firstEditProps } from ".";
import { reqUpdatePost } from "../../store/_action/post";
import { PostTitleButtons } from "./PostTitleButtons";

export default function PostTitle(
    props: PostProps & FormikProps<FormValues> & firstEditProps
): ReactElement {
    const { post, edit, handleChange, values } = props;
    const dispatch = useDispatch();
    const [editable, setEditable] = useState(edit);

    const useStyles = makeStyles({
        titleWrapper: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "35px",
            padding: ".3em .5em",
            backgroundColor: "#c9c9e8",
            borderBottom: ".5px solid #bfbeda",
        },
        title: {
            maxWidth: "75%",
            minWidth: "30%",
            backgroundColor: "transparent",
            fontSize: ".9em",
            fontWeight: "bold",
            cursor: "text",
            "&:focus": {
                border: "none",
                outline: "1px dashed gray",
            },
        },
        btns: {
            cursor: "pointer",
        },
    });
    const classes = useStyles();

    return (
        <div className={classes.titleWrapper}>
            {editable ? (
                <Field
                    id="title"
                    name="title"
                    className={classes.title}
                    placeholder="제목을 입력하세요"
                    values={values.title}
                    autoFocus
                    onChange={handleChange}
                    onBlur={() => {
                        if (values.title) {
                            dispatch(
                                reqUpdatePost({
                                    ...post,
                                    ...values,
                                })
                            );
                            setEditable(false);
                        }
                    }}
                />
            ) : (
                <div
                    className={classes.title}
                    onClick={() => setEditable(true)}
                >
                    {post.title}
                </div>
            )}
            <PostTitleButtons post={post} />
        </div>
    );
}
