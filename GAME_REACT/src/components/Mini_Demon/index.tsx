import React from "react";
import "./style.css"
import { HERO_HELMET_OFFSET, TILE_SIZE } from "../../settings/consts";

const MiniDemon = () => {
    return (
        <div
        style={{
            width:TILE_SIZE,
            height:TILE_SIZE + HERO_HELMET_OFFSET,
            backgroundImage:"url(./public/assets/MINI-DEMON.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition:`0px -${TILE_SIZE - HERO_HELMET_OFFSET}px`,
            animation: 'miniDemon-animation 0.5s steps(4) infinite',
            position:"absolute",
            bottom:48 *9,
            left:48 * 11
            
            
        }}></div>
       
    )
}
export default MiniDemon