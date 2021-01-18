import React, { ReactElement, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { reqDeleteBoard } from '../../store/_action/board';
import { IBoard } from '../../store/_type';

interface ListProps {
    board: IBoard
}

export default function List ({ board }:ListProps) : ReactElement {

    const dispatch = useDispatch()

    const handleBoardOn = (e:MouseEvent) => {
        console.log("isOn")
    }
    const handleDeleteBoard = (e:MouseEvent) => {
        e.preventDefault()
        dispatch(reqDeleteBoard(board.timestamp))
        // 포스트도 삭제
        // 마지막 보드로 isOn 변경 
    }

    return(
        <>
        <li id={`${board.timestamp}`} key={`boardIndex-${board.index}`} onClick={handleBoardOn}>
            {board.name}
                    
        </li>
        <button onClick={handleDeleteBoard}>🗑</button>
        </>
    )
}