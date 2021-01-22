import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
import { PostProps } from ".";
import { reqUpdatePost, reqDeletePost } from "../../store/_action/post";

export function PostTitleButtons(props: PostProps): ReactElement {
    const { post } = props;
    const dispatch = useDispatch();
    const useStyles = makeStyles({
        btns: {
            cursor: "pointer",
        },
    });
    const classes = useStyles();
    return (
        <div className={classes.btns}>
            {post.isOpen ? (
                <ExpandLessIcon
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

            <CloseIcon
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
