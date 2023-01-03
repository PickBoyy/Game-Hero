import React from "react";
import { GAME_SIZE } from "../../settings/consts";
import Hero from "../Hero/";

const Board = () => {
    return (
        <div>
            <Hero/>
            <img src="\image\assets\BOARD.gif" alt="board" width={GAME_SIZE} height={GAME_SIZE}/>
        </div>
        
    )
}
export default Board