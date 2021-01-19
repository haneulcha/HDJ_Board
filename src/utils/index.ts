const KEY_BOARDS = "Boards"
const KEY_IS_ON = "isOn"

export interface IIsOnLS {
    isOn: number
}

interface IPostLS {
    id: string
    title: string
    content: string
    location: { long: number, lat: number }
    size : { width: number, height: number }
    boardId: string
    timestamp: number
}

export interface IBoardLS {
    index: number,
    name: string,
    timestamp: number,
    posts: Array<IPostLS>
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
export function getIsOnLS():IIsOnLS {    
    const isOn = localStorage.getItem(KEY_IS_ON) || "{}";
    const parsedIsOn:IIsOnLS = JSON.parse(isOn);
    return parsedIsOn
}

export function createBoardLS(): IBoardLS {
    const getNewTimeStamp = ():number => Math.round(new Date().getTime() / 100)
 
    const existingBoards = localStorage.getItem(KEY_BOARDS) || "[]";
    const parsedBoards:Array<IBoardLS> = JSON.parse(existingBoards);
    const board: IBoardLS = {
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
    const parsedBoards: IBoardLS[] = JSON.parse(existingBoards);
    const filteredBoards: IBoardLS[] = parsedBoards.filter( board => +board.timestamp !== timestamp )
    localStorage.setItem(KEY_BOARDS, JSON.stringify(filteredBoards));

    // isOn을 마지막 보드로 이동
    const lastBoardTimestamp = filteredBoards[filteredBoards.length - 1].timestamp
    updateIsOnLS(lastBoardTimestamp)
    return true
}

export function getBoardListLS(): Array<IBoardLS> {
    
    if(!exist(KEY_BOARDS)){ // 첫 접속일 경우
        createBoardLS()        
    } 
    const boards = localStorage.getItem(KEY_BOARDS) || "[]";
    const parsedBoards:Array<IBoardLS> = JSON.parse(boards) ;

    return parsedBoards
}