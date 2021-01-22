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
    const { title } = post;

    const useStyles = makeStyles({
        titleWrapper: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "move",
            backgroundColor: "#bae8e8",
            width: "100%",
            height: "35px",
        },
        title: {
            minWidth: "30%",
            height: "100%",
            cursor: "auto",
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
                        dispatch(
                            reqUpdatePost({
                                ...post,
                                ...values,
                            })
                        );
                        setEditable(false);
                    }}
                />
            ) : (
                <div
                    className={classes.title}
                    onClick={() => setEditable(true)}
                >
                    {title}
                </div>
            )}
            <PostTitleButtons post={post} />
        </div>
    );
}
