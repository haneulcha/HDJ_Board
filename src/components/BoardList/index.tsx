import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestBoard } from '../../store/_action/board';
import { IrootState } from '../../store/_type';


function BoardList ():React.ReactElement {
    const dispatch = useDispatch()
    const boardLists = useSelector((state: IrootState) => state.board.boards )
 
     // board list 불러오기
        // useState에 저장
        // onclick => 새 board 객체 추가
        // localstorage, 리덕스, 
  
    const handleAddList = () => {        
        dispatch(requestBoard())
    } 

    return(
        <section className="board-list">
            보드 리스트
            <button onClick={handleAddList}>📋</button>
        </section>
    )
}

export default BoardList