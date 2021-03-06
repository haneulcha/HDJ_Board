export const REQ_GET_ISON = "REQ_GET_ISON";
export const GET_ISON = "GET_ISON";
export const REQ_UPDATE_ISON = "REQ_UPDATE_ISON";
export const UPDATE_ISON = "UPDATE_ISON";

export interface IIsOnState {
    board: string;
    boardId: number;
}

export interface IReqGetIsOnAction {
    type: typeof REQ_GET_ISON;
}

export interface IGetIsOnAction {
    type: typeof GET_ISON;
    payload: {
        board: string;
        boardId: number;
    };
}

export interface IReqUpdateIsOnAction {
    type: typeof REQ_UPDATE_ISON;
    payload: {
        board: string;
        boardId: number;
    };
}

export interface IUpdateIsOnAction {
    type: typeof UPDATE_ISON;
    payload: {
        board: string;
        boardId: number;
    };
}

export type IsOnActionTypes =
    | IReqGetIsOnAction
    | IGetIsOnAction
    | IReqUpdateIsOnAction
    | IUpdateIsOnAction;
