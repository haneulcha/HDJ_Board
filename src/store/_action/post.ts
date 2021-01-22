import { IPostLS } from "../../utils";
import {
    ReqPostActionTypes,
    IReqGetPostsAction,
    IReqUpdatePostAction,
    REQ_CREATE_POST,
    REQ_DELETE_POST,
    REQ_GET_POSTS,
    REQ_UPDATE_POST,
    IReqDeletePostAction,
} from "../_type";

export function reqCreatePost(post: IPostLS): ReqPostActionTypes {
    return {
        type: REQ_CREATE_POST,
        payload: post,
    };
}

export function reqDeletePost(
    boardId: number,
    timestamp: number
): IReqDeletePostAction {
    return {
        type: REQ_DELETE_POST,
        meta: {
            boardId,
            timestamp,
        },
    };
}

export function reqGetPosts(): IReqGetPostsAction {
    return {
        type: REQ_GET_POSTS,
    };
}

export function reqUpdatePost(post: IPostLS): IReqUpdatePostAction {
    return {
        type: REQ_UPDATE_POST,
        payload: post,
    };
}
