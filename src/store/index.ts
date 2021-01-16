import { combineReducers } from 'redux'
import { boardReducer } from './board/reducers'
import { postReducer } from './post/reducers'

export const rootReducer = combineReducers({
    board: boardReducer,
    post: postReducer
})

export type RootState = ReturnType<typeof rootReducer>