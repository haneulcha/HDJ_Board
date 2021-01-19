export const KEY_BOARDS = "Boards";
export const KEY_IS_ON = "isOn";

export interface IIsOnLS {
    isOn: number;
}

export interface IPostLS {
    title: string;
    content: string;
    location: { long: number; lat: number };
    size: { width: number; height: number };
    boardId: string;
    timestamp: number;
}

export interface IBoardLS {
    index: number;
    name: string;
    timestamp: number;
    posts: Array<IPostLS>;
}
