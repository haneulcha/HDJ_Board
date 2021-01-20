export function exist(key: string): boolean {
    const existingBoards = localStorage.getItem(key);
    if (existingBoards) return true;
    else return false;
}

export const getNewTimeStamp = (): number =>
    Math.round(new Date().getTime() / 100);
