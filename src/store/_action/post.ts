import { IPostLS } from "../../utils";
import {
    ReqPostActionTypes,
    IReqGetPostsAction,
    IReqUpdatePostAction,
    REQ_CREATE_POST,
    REQ_DELETE_POST,
    REQ_GET_POSTS,
    REQ_UPDATE_POST,
} from "../_type";

export function reqCreatePost(post: IPostLS): ReqPostActionTypes {
    return {
        type: REQ_CREATE_POST,
        payload: post,
    };
}

export function reqDeletePost(): ReqPostActionTypes {
    return {
        type: REQ_DELETE_POST,
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
// export function createPost(newPost: IPost): PostActionTypes {
//     return {
//         type: CREATE_POST,
//         payload: newPost
//     }
// }

// export function deletePost(boardId: number, timestamp: number): PostActionTypes {
//     return {
//         type: DELETE_POST,
//         meta: {
//             boardId,
//             timestamp
//         }
//     }
// }
