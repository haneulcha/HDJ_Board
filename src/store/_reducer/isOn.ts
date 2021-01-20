import { GET_ISON, IsOnActionTypes, IIsOnState } from "../_type";

export function isOnReducer(
    state = {
        board: "",
        boardId: 0,
    },
    action: IsOnActionTypes
): IIsOnState {
    switch (action.type) {
        case GET_ISON:
            return {
                board: action.payload.board,
                boardId: action.payload.boardId,
            };
        default:
            return state;
    }
}
