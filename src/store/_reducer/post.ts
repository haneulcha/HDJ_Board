import { CREATE_POST, DELETE_POST, PostActionTypes, IPostsState } from '../_type/post'

const initialState: IPostsState = {
    posts: []
}

export function postReducer(
    state = initialState,
    action: PostActionTypes
): IPostsState {
    switch (action.type){
        case CREATE_POST:
            return {
                posts: [...state.posts, action.payload]
            }
        case DELETE_POST:
            return {
                posts: state.posts.filter(
                    post => post.timestamp !== action.meta.timestamp
                )
            }
        default:
            return state
    }

}