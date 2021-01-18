const KEY_BOARDS = "Boards"
const KEY_IS_ON = "isOn"

export interface IsOnLS {
    isOn: number
}

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

function exist(key: string): boolean {
    const existingBoards = localStorage.getItem(key);
    if(existingBoards) return true
    else return false
}

// 이미 생성된 보드를 클릭할 때만 호출
export function updateIsOnLS(timestamp:number):void {
    const isOn = {
        isOn: timestamp
    }
    localStorage.setItem(KEY_IS_ON, JSON.stringify(isOn)); 
}

// 보드를 생성 및 삭제할 때 호출
export function getIsOnLS():IsOnLS {    
    const isOn = localStorage.getItem(KEY_IS_ON) || "{}";
    const parsedIsOn:IsOnLS = JSON.parse(isOn);
    return parsedIsOn
}

export function createBoardLS(): BoardLS {
    const getNewTimeStamp = ():number => Math.round(new Date().getTime() / 100)
 
    const existingBoards = localStorage.getItem(KEY_BOARDS) || "[]";
    const parsedBoards:Array<BoardLS> = JSON.parse(existingBoards);
    const board: BoardLS = {
        index: parsedBoards.length + 1,
        name: "새 보드",
        timestamp: getNewTimeStamp(),
        posts : []
    }       
    localStorage.setItem(KEY_BOARDS, JSON.stringify([...parsedBoards, board])); 
    updateIsOnLS(board.timestamp)

    return board
}

export function deleteBoardLS(timestamp: number): boolean {
    
    const existingBoards = localStorage.getItem(KEY_BOARDS);
    if(!existingBoards){
        return false
    }
    const parsedBoards: BoardLS[] = JSON.parse(existingBoards);
    const filteredBoards: BoardLS[] = parsedBoards.filter( board => +board.timestamp !== timestamp )
    localStorage.setItem(KEY_BOARDS, JSON.stringify(filteredBoards));

    // isOn을 마지막 보드로 이동
    const lastBoardTimestamp = filteredBoards[filteredBoards.length - 1].timestamp
    updateIsOnLS(lastBoardTimestamp)
    return true
}

export function getBoardListLS(): Array<BoardLS> {
    
    if(!exist(KEY_BOARDS)){ // 첫 접속일 경우
        createBoardLS()        
    } 
    const boards = localStorage.getItem(KEY_BOARDS) || "[]";
    const parsedBoards:Array<BoardLS> = JSON.parse(boards) ;

    return parsedBoards
}