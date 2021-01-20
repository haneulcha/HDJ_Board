export const KEY_BOARDS = "Boards";
export const KEY_IS_ON = "isOn";

export interface IIsOnLS {
    board: string;
    boardId: number;
}

export interface IPostLS {
    title: string;
    content: string;
    location: { long: number; lat: number };
    size: { width: number; height: number };
    boardId: number;
    timestamp: number;
}

export interface IBoardLS {
    index: number;
    name: string;
    timestamp: number;
    posts: Array<IPostLS>;
}
