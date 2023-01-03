import React from "react";
import "./style.css"
import { DEMON_TILE_SIZE, TILE_SIZE } from "../../settings/consts";

const Demon = () => {
    return (
        <div
        style={{
            width:DEMON_TILE_SIZE,
            height:DEMON_TILE_SIZE,
            backgroundImage:"url(./public/assets/DEMON.png)",
            backgroundRepeat: "no-repeat",
            animation: 'demon-animation 0.8s steps(4) infinite',
            position:"absolute",
            bottom:TILE_SIZE * 3,
            left:TILE_SIZE * 1,
            
            
        }}></div>
       
    )
}
export default Demon