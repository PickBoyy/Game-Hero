import React from "react";
import "./style.css"
import { TILE_SIZE } from "../../settings/consts";

const MiniDemon = () => {
    return (
        <div
        style={{
            width:TILE_SIZE,
            height:100,
            backgroundImage:"url(./public/assets/MINI-DEMON.png)",
            backgroundRepeat: "no-repeat",
            animation: 'miniDemon-animation 0.5s steps(4) infinite',
            position:"absolute",
            bottom:48 *9,
            left:48 * 11
            
            
        }}></div>
       
    )
}
export default MiniDemon