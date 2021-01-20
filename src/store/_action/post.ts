import { IPostLS } from "../../utils";
import {
    ReqPostActionTypes,
    IReqGetPostsAction,
    REQ_CREATE_POST,
    REQ_DELETE_POST,
    REQ_GET_POSTS,
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
