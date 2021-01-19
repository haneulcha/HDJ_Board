import {
    GET_POSTS,
    CREATE_POST,
    DELETE_POST,
    PostActionTypes,
    IPostsState,
    ReqPostActionTypes,
} from "../_type";

const initialState: IPostsState = {
    posts: [],
};

export function postReducer(
    state = initialState,
    action: PostActionTypes | ReqPostActionTypes
): IPostsState {
    switch (action.type) {
        case CREATE_POST:
            return {
                posts: [...state.posts, action.payload],
            };
        case DELETE_POST:
            return {
                posts: state.posts.filter(
                    (post) => post.timestamp !== action.meta.timestamp
                ),
            };
        case GET_POSTS:
            return {
                posts: action.payload,
            };
        default:
            return state;
    }
}
