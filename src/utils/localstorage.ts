export function exist(key: string): boolean {
    const existingBoards = localStorage.getItem(key);
    if (existingBoards) return true;
    else return false;
}
