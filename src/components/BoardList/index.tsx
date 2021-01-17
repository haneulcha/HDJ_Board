import React from 'react';
import { useDispatch } from 'react-redux';
import { requestBoard } from '../../store/_action/board';


function BoardList ():React.ReactElement {
    const dispatch = useDispatch()
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