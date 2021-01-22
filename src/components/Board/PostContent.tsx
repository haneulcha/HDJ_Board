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
            height: "calc(100% - 35px)",
            padding: ".3em .4em",
            backgroundColor: "transparent",
            font: "unset",
            fontSize: ".8em",
            lineHeight: "1.8em",
            cursor: "auto",
            "&:focus": {
                fontSize: "unset",
                border: "none",
                outline: "1px dashed gray",
            },
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
                        className={classes.content}
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
                    <div onClick={() => setEditable(true)}>
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
