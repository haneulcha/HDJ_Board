import React, { ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { Field, FormikProps } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { PostProps, FormValues, firstEditProps } from ".";
import { reqUpdatePost } from "../../store/_action/post";

export default function PostContent(
    props: PostProps & FormikProps<FormValues> & firstEditProps
): ReactElement {
    const { post, edit, handleChange, values } = props;
    const dispatch = useDispatch();
    const [editable, setEditable] = useState(edit);

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
