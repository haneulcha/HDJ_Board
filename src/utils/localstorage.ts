import { IBoardLS, KEY_BOARDS } from "./type";

export function exist(key: string): boolean {
    const existingBoards = localStorage.getItem(key);
    if (existingBoards) return true;
    else return false;
}

export const getNewTimeStamp = (): number =>
    Math.round(new Date().getTime() / 100);

export function getBoardsFromLS(): Array<IBoardLS> {
    const existingBoards = localStorage.getItem(KEY_BOARDS) || "[]";
    return JSON.parse(existingBoards);
}
