const KEY_BOARDS = "Boards"
const KEY_IS_ON = "isOn"

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

function exist(): boolean {
    const existingBoards = localStorage.getItem(KEY_BOARDS);
    if(existingBoards) return true
    else return false
}

export function createBoardLS(): BoardLS {
    const getNewTimeStamp = ():number => Math.round(new Date().getTime() / 1000)
 
    const existingBoards = localStorage.getItem(KEY_BOARDS) || "[]";
    const parsedBoards:Array<BoardLS> = JSON.parse(existingBoards);
    const board: BoardLS = {
        index: parsedBoards.length + 1,
        name: "새 보드",
        timestamp: getNewTimeStamp(),
        posts : []
    }       
    localStorage.setItem(KEY_BOARDS, JSON.stringify([...parsedBoards, board])); 
        
    return board
}

export function deleteBoardLS(timestamp: number): boolean {

    const existingBoards = localStorage.getItem(KEY_BOARDS);
    if(!existingBoards){
        return false
    }
    const parsedBoards: BoardLS[] = JSON.parse(existingBoards);
    parsedBoards.filter( board => board.timestamp !== timestamp )
    localStorage.setItem(KEY_BOARDS, JSON.stringify(parsedBoards));
    return true
}

export function getBoardListLS(): Array<BoardLS> {
    
    if(!exist()){ // 첫 접속일 경우
        createBoardLS()        
    } 
    const boards = localStorage.getItem(KEY_BOARDS) || "[]";
    const parsedBoards:Array<BoardLS> = JSON.parse(boards) ;

    return parsedBoards
}