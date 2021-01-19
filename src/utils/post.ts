import { IPostLS, IBoardLS, KEY_BOARDS } from "./type";

export function getPostsLS(boardTimestamp: number): Array<IPostLS> {
    const boards = localStorage.getItem(KEY_BOARDS) || "[]";
    const parsedBoards: Array<IBoardLS> = JSON.parse(boards);
    const board: Array<IBoardLS> = parsedBoards.filter(
        (board) => board.timestamp !== boardTimestamp
    );
    const posts = board[0].posts;
    return posts;
}
