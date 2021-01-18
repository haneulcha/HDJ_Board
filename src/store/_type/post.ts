export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'

export interface IPost {
    id: string
    title: string
    content: string
    long: number
    lat: number
    width: number
    height: number
    boardId: string
    timestamp: number
}

export interface IPostsState {
    posts: Array<IPost>
}

interface ICreatePostAction {
    type: typeof CREATE_POST
    payload: IPost
}

interface IDeletePostAction {
    type: typeof DELETE_POST
    meta: {
        boardId: string
        timestamp: number // TODO: 지울 때 timestamp를 기록하는 이유
    }
}

export type PostActionTypes = ICreatePostAction | IDeletePostAction