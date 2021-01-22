import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { PostProps } from ".";
import { reqUpdatePost, reqDeletePost } from "../../store/_action/post";

export function PostTitleButtons(props: PostProps): ReactElement {
    const { post } = props;
    const dispatch = useDispatch();
    const useStyles = makeStyles({
        btnWrapper: {
            display: "flex",
            textAlign: "center",
        },
        btns: {
            cursor: "pointer",
            fontSize: "1.5em",
            marginLeft: ".1em",
            "&:hover": {
                color: "#9f9dc8",
            },
        },
    });
    const classes = useStyles();
    return (
        <div className={classes.btnWrapper}>
            {post.isOpen ? (
                <ExpandLessIcon
                    className={classes.btns}
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
                    className={classes.btns}
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

            <HighlightOffIcon
                className={classes.btns}
                onClick={() => {
                    if (post.content) {
                        if (window.confirm("정말 삭제하시겠습니까?")) {
                            dispatch(
                                reqDeletePost(post.boardId, post.timestamp)
                            );
                        }
                    } else
                        dispatch(reqDeletePost(post.boardId, post.timestamp));
                }}
            />
        </div>
    );
}
