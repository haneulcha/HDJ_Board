import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IrootState, IBoard } from '../../store/_type'
import { reqCreateBoard } from '../../store/_action/board';
import List from './list'


function BoardList ():React.ReactElement {
    const dispatch = useDispatch()
    const boardLists = useSelector((state: IrootState) => state.board.boards )
 
     // board list 불러오기
        // useState에 저장
        // onclick => 새 board 객체 추가
        // localstorage, 리덕스, 
  
    const handleAddBoard = () => {        
        dispatch(reqCreateBoard())
    } 

    return(
        <section className="board-list">
            <ul>
                {boardLists.map((board:IBoard, i:number) => 
                    <List key={i} board={board} />                
                )}
            </ul>
            보드 리스트
            <button onClick={handleAddBoard}>📋</button>
        </section>
    )
}

export default BoardList