import React, { ReactElement, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { reqDeleteBoard } from '../../store/_action/board';
import { Board } from '../../store/_type/board';

interface ListProps {
    board: Board
}

export default function List ({ board }:ListProps) : ReactElement {

    const dispatch = useDispatch()

    const handleDeleteBoard = (e:MouseEvent) => {
        e.preventDefault()
        dispatch(reqDeleteBoard(board.timestamp))        
    }

    return(
        <li id={`${board.timestamp}`} key={`boardIndex-${board.index}`}>
            {board.name}

            <button onClick={handleDeleteBoard}>🗑</button>
            
        </li>
    )
}