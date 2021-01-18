import { combineReducers } from 'redux'
import { boardReducer } from './_reducer/board'
import { postReducer } from './_reducer/post'
import { isOnReducer } from './_reducer/isOn'

export const rootReducer = combineReducers({
    board: boardReducer,
    post: postReducer,
    isOn: isOnReducer
})

export type RootState = ReturnType<typeof rootReducer>