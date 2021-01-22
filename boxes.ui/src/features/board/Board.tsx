import React from 'react';
import './Board.css'

interface BoardProps {
    size: number
}

export function Board({ size }: BoardProps) {
    let board = [];
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            row.push(<Dot x={j} y={i} />);
        }
        board.push(
            <div className="row" key={i}>
                {row}
            </div>
        );
    }
    return (
        <div id="game-board">
            {board}
        </div>
    );
}


interface DotProps {
    x: number;
    y: number;
}
export function Dot(props: DotProps) {
    let id = props.x + "," + props.y
    return (
        <div className="dot" key={id}>

        </div>
    );
}