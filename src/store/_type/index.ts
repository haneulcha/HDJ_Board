import { IBoard } from "./board";
import { IPost } from "./post";

export interface IrootState {
    board: {
        boards: Array<IBoard>;
    };
    post: {
        posts: Array<IPost>;
    };
    isOn: {
        board: string;
        boardId: number;
    };
}

export * from "./board";
export * from "./isOn";
export * from "./post";
