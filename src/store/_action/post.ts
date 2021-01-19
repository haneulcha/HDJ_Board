import {
    IPost,
    CREATE_POST,
    DELETE_POST,
    PostActionTypes,
    ReqPostActionTypes,
    REQ_CREATE_POST,
    REQ_DELETE_POST,
    REQ_GET_POSTS,
} from "../_type";

export function reqCreatePost(): ReqPostActionTypes {
    return {
        type: REQ_CREATE_POST,
    };
}

export function reqDeletePost(): ReqPostActionTypes {
    return {
        type: REQ_DELETE_POST,
    };
}

export function reqGetPosts(timestamp: number): ReqPostActionTypes {
    return {
        type: REQ_GET_POSTS,
        payload: {
            timestamp,
        },
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
