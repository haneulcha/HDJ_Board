import { combineReducers } from 'redux'
import { boardReducer } from './_reducer/board'
import { postReducer } from './_reducer/post'

export const rootReducer = combineReducers({
    board: boardReducer,
    post: postReducer
})

export type RootState = ReturnType<typeof rootReducer>