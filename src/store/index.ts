import { combineReducers } from 'redux'
import { boardReducer, postReducer, isOnReducer } from './_reducer'

export const rootReducer = combineReducers({
    board: boardReducer,
    post: postReducer,
    isOn: isOnReducer
})

export type RootState = ReturnType<typeof rootReducer>