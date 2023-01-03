import React from "react";
import "./style.css"
import { TILE_SIZE } from "../../settings/consts";

const Chest = () => {
    return (
        <div
        style={{
            width:TILE_SIZE,
            height:TILE_SIZE,
            backgroundImage:"url(C:\Users\breno\PickDEV\GAME_REACT\src\image\assets\CHEST.png)",
            backgroundRepeat: "no-repeat",
            animation: 'chest-animation 1s steps(3) infinite',
            position:"absolute",
            bottom:TILE_SIZE * 15,
            left:TILE_SIZE * 8,
            
            
        }}></div>
       
    )
}
export default Chest