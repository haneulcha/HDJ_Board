export const REQ_GET_ISON = 'REQ_GET_ISON'
export const GET_ISON = 'GET_ISON'

export interface IsOnState {
    isOn : number
}

export interface ReqGetIsOnAction {
    type: typeof REQ_GET_ISON
}

export interface GetIsOnAction {
    type: typeof GET_ISON
    payload: {
        isOn : number
    }
}

export type IsOnActionTypes = ReqGetIsOnAction | GetIsOnAction