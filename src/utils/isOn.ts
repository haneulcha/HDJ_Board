import { KEY_IS_ON, IIsOnLS } from "./type";

export function updateIsOnLS(board: string, boardId: number): void {
    const isOn = {
        board,
        boardId,
    };
    localStorage.setItem(KEY_IS_ON, JSON.stringify(isOn));
}

export function getIsOnLS(): IIsOnLS {
    const isOn = localStorage.getItem(KEY_IS_ON) || "{}";
    const parsedIsOn: IIsOnLS = JSON.parse(isOn);
    return parsedIsOn;
}
