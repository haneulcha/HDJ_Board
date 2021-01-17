const KEY = "HDJ_BOARDS"

interface PostLS {
    id: string
    title: string
    content: string
    location: { long: number, lat: number }
    size : { width: number, height: number }
    boardId: string
    timestamp: number
}

export interface BoardLS {
    index: number,
    name: string,
    timestamp: number,
    posts: Array<PostLS>
}

export function createBoardLS(): BoardLS {
    const getNewTimeStamp = ():number => Math.round(new Date().getTime() / 1000)
   
    const existingBoards = localStorage.getItem(KEY);

    if (!existingBoards) {
        const board: BoardLS = {
            index: 1,
            name: "새 보드",
            timestamp: getNewTimeStamp(),
            posts : []
        }
        localStorage.setItem(KEY, JSON.stringify([board]));
        return board    
    }
         
    const parsedBoards:Array<BoardLS> = JSON.parse(existingBoards);
    const board: BoardLS = {
        index: parsedBoards.length + 1,
        name: "새 보드",
        timestamp: getNewTimeStamp(),
        posts : []
    }
    parsedBoards.push(board)
    localStorage.setItem(KEY, JSON.stringify(parsedBoards)); 
    
    return board
}

export function deleteBoardLS(timestamp: number): boolean {

    const existingBoards = localStorage.getItem(KEY);
    if(!existingBoards){
        return false
    }
    const parsedBoards: BoardLS[] = JSON.parse(existingBoards);
    parsedBoards.filter( board => board.timestamp !== timestamp )
    localStorage.setItem(KEY, JSON.stringify(parsedBoards));
    return true
}