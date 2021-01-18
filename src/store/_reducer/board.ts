
import {  CREATE_BOARD, DELETE_BOARD, BoardsState, BoardActionTypes, GET_BOARDLIST, BoardListActionTypes } from '../_type/board'

const initialState: BoardsState = {
    boards: []
}

export function boardReducer(
    state = initialState,
    action: BoardActionTypes | BoardListActionTypes
): BoardsState {    
    switch (action.type){
        
        case CREATE_BOARD:
            return {
                boards: [...state.boards, action.payload]
            }
        case DELETE_BOARD:
            return {
                boards: state.boards.filter(
                    board => board.timestamp !== action.meta.timestamp
                )
            }
        case GET_BOARDLIST:
            return {
                boards: action.payload
            }
        // case CREATE_POST:
            
            // const motherboard = newArray.filter(board => // TODO: filter 말고 단일 원소 뱉어내는 메소드
            //     board.id === action.payload.boardId)
            // const boardIndex = newArray.indexOf(motherboard[0])

            // motherboard[0].posts.push(action.payload)
            // newArray.splice(boardIndex, 0, motherboard[0])            
            // return {
            //     boards: [
                    
            //         ...state.boards.filter(board => 
            //             board.id !== action.payload.boardId),
            //         {...state.boards.filter(board => 
            //             board.id === action.payload.boardId)[0]
            //             posts: 
            //         }                
            //     ]
            // }
        // case DELETE_POST:
        //     let copiedArray = state.boards.slice()
        //     const copiedBoard = state.boards.filter(board => 
        //         board.id === action.meta.boardId)
        //     const brdIndex = state.boards.indexOf(copiedBoard[0])
        //     const newPostsArray = copiedBoard[0].posts.filter(posts => 
        //         posts.timestamp !== action.meta.timestamp)

        //     copiedBoard[0].posts = newPostsArray
        //     copiedArray.splice(brdIndex, 0, copiedBoard[0])
            
        //     return {
        //         boards: [...copiedArray]
        //     }
        default:
            return state
    }
}
