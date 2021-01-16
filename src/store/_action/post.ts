import { Post, CREATE_POST, DELETE_POST, PostActionTypes } from '../_type/post'

export function createPost(newPost: Post): PostActionTypes {    
    return {
        type: CREATE_POST,
        payload: newPost
    }
}

export function deletePost(boardId: string, timestamp:number): PostActionTypes {
    return {
        type: DELETE_POST,
        meta: {
            boardId,
            timestamp
        }
    }
}