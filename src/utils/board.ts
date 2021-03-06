import { IBoardLS, KEY_BOARDS } from "./type";
import { exist, getBoardsFromLS, getNewTimeStamp } from "./localstorage";
import { updateIsOnLS } from "./isOn";

export function createBoardLS(): IBoardLS {
    const parsedBoards: Array<IBoardLS> = getBoardsFromLS();
    const board: IBoardLS = {
        index: parsedBoards.length + 1,
        name: "새 보드",
        timestamp: getNewTimeStamp(),
        posts: [],
    };
    localStorage.setItem(KEY_BOARDS, JSON.stringify([...parsedBoards, board]));
    updateIsOnLS(board.name, board.timestamp);

    return board;
}

export function updateBoardLS(data: {
    name: string;
    timestamp: number;
}): boolean {
    const parsedBoards: Array<IBoardLS> = getBoardsFromLS();
    const updatedBoards: Array<IBoardLS> = parsedBoards.map((board) =>
        board.timestamp === data.timestamp
            ? { ...board, name: data.name }
            : board
    );
    localStorage.setItem(KEY_BOARDS, JSON.stringify(updatedBoards));
    updateIsOnLS(data.name, data.timestamp);
    return true;
}

export function deleteBoardLS(timestamp: number): boolean {
    const existingBoards = localStorage.getItem(KEY_BOARDS);
    if (!existingBoards) {
        return false;
    }
    const parsedBoards: Array<IBoardLS> = getBoardsFromLS();
    const filteredBoards: IBoardLS[] = parsedBoards.filter(
        (board) => +board.timestamp !== timestamp
    );
    localStorage.setItem(KEY_BOARDS, JSON.stringify(filteredBoards));

    const lastBoard = filteredBoards[filteredBoards.length - 1];
    updateIsOnLS(lastBoard.name, lastBoard.timestamp);
    return true;
}

export function getBoardListLS(): Array<IBoardLS> {
    if (!exist(KEY_BOARDS)) {
        createBoardLS();
    }

    return getBoardsFromLS();
}
