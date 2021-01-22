export const REQ_GET_POSTS = "REQ_GET_POSTS";
export const GET_POSTS = "GET_POSTS";

export const REQ_CREATE_POST = "REQ_CREATE_POST";
export const CREATE_POST = "CREATE_POST";

export const REQ_UPDATE_POST = "REQ_UPDATE_POST";
export const UPDATE_POST = "UPDATE_POST";

export const REQ_DELETE_POST = "REQ_DELETE_POST";
export const DELETE_POST = "DELETE_POST";

export interface IPost {
    title: string;
    content: string;
    position: { x: number; y: number };
    size: { width: number; height: number };
    isOpen: boolean;
    boardId: number;
    timestamp: number;
    modified: number;
}

export interface IPostsState {
    posts: Array<IPost>;
}

export interface IReqCreatePostActions {
    type: typeof REQ_CREATE_POST;
    payload: IPost;
}

export interface ICreatePostAction {
    type: typeof CREATE_POST;
    payload: IPost;
}

export interface IReqDeletePostAction {
    type: typeof REQ_DELETE_POST;
    meta: {
        boardId: number;
        timestamp: number;
    };
}

export interface IDeletePostAction {
    type: typeof DELETE_POST;
    meta: {
        timestamp: number;
    };
}

export interface IReqUpdatePostAction {
    type: typeof REQ_UPDATE_POST;
    payload: IPost;
}

export interface ReqUpdatePostAction {
    type: typeof UPDATE_POST;
    payload: IPost;
}

export interface IReqGetPostsAction {
    type: typeof REQ_GET_POSTS;
}

interface IGetPostsAction {
    type: typeof GET_POSTS;
    payload: Array<IPost>;
}

export type CreatePostActionTypes = IReqCreatePostActions | ICreatePostAction;

export type ReqPostActionTypes =
    | IReqCreatePostActions
    | IReqDeletePostAction
    | IReqGetPostsAction
    | IReqUpdatePostAction;
export type PostActionTypes =
    | ICreatePostAction
    | IDeletePostAction
    | IGetPostsAction
    | ReqUpdatePostAction;
