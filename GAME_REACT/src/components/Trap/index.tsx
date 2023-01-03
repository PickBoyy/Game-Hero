import React from "react";
import "./style.css"
import { DEMON_TILE_SIZE, TILE_SIZE } from "../../settings/consts";

const Trap = () => {
    return (
        <div
        style={{
            width:TILE_SIZE,
            height:100,
            backgroundImage:"url(./public/assets/TRAP.png)",
            backgroundRepeat: "no-repeat",
            animation: 'trap-animation 1s steps(8) infinite',
            position:"absolute",
            bottom:TILE_SIZE * 6,
            left:TILE_SIZE * 14,
            
            
        }}></div>
       
    )
}
export default Trap