import {
    CREATE_BOARD,
    DELETE_BOARD,
    GET_BOARDLIST,
    IBoardsState,
    BoardActionTypes,
    BoardListActionTypes,
} from "../_type/board";

const initialState: IBoardsState = {
    boards: [],
};

export function boardReducer(
    state = initialState,
    action: BoardActionTypes | BoardListActionTypes
): IBoardsState {
    switch (action.type) {
        case CREATE_BOARD:
            return {
                boards: [...state.boards, action.payload],
            };
        case DELETE_BOARD:
            return {
                boards: [
                    ...state.boards.filter(
                        (board) => board.timestamp !== action.meta.timestamp
                    ),
                ],
            };
        case GET_BOARDLIST:
            return {
                boards: action.payload,
            };

        default:
            return state;
    }
}
