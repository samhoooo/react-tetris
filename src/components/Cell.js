import React from "react";
import { StyledCell } from '../styles/StyledCells';
import { TETROMINOS } from "../tetrominos";

const Cell = ({type}) => {
    return (
        <StyledCell type={type} color={TETROMINOS[type].color}/>
    )
}

export default Cell;