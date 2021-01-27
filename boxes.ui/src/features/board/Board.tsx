import React, { useState } from 'react';
import './Board.css'

interface BoardProps {
    size: number
}

export function Board({ size }: BoardProps) {
    let board = [];
    for (let i = 0; i < size; i++) {
        board.push(horizontalRow(i));
        board.push(verticalRow(i));
    }
    board.push(horizontalRow(size));
    return (
        <div id="game-board">
            {board}
        </div>
    );

    function verticalRow(i: number) {
        let row = [];
        for (let j = 0; j < size; j++) {
            let id = `(${i},${j})`;
            row.push(
                <>
                    <Line  key={id + "-vline"}/>
                    <Square key={id + "-vsquare"} />
                </>
            );
        }
        let id = `(${i},${size})`;
        row.push(<Line key={id + "-vline"}/>);
        return (
            <div className="row" key={i + "-vertical"}>
                {row}
            </div>
        );
    }

    function horizontalRow(i: number) {
        let row = [];
        for (let j = 0; j < size; j++) {
            let id = `(${i},${j})`;
            row.push(
                <>
                    <Dot x={j} y={i} key={id + "-dot"} />
                    <Line horizontal key={id + "-line"} />
                </>
            );
        }
        let id =`(${i},${size})-dot`;
        row.push(<Dot x={size} y={i} key={id} />);
        return (
            <div className="row" key={i + "-horizontal"}>
                {row}
            </div>
        );
    }
}


interface DotProps {
    x: number;
    y: number;
}

export function Dot(props: DotProps) {
    
    return (
        <div className="dot">
        </div>
    );
}

interface LineProps {
    horizontal?: boolean;

}

export function Line(props: LineProps){
    const [isSelected, setSelected] = useState(false);
    return (
        <div 
            className={ "line" + 
                        (props.horizontal ? " horizontal-line" : " vertical-line") +
                        (isSelected ? " line-selected" : "")}
            onClick={e => handleLineClicked()}
        >
        </div>
    );

    function handleLineClicked(){
        setSelected(true);
    }
}

export function Square(){
    return (
        <div className="square">
        </div>
    );
}