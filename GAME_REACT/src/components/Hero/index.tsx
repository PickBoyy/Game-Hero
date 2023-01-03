import React from "react";
import "./style.css"
import { TILE_SIZE } from "../../settings/consts";

const Hero = () => {
    return (
        <div
        style={{
            width:TILE_SIZE,
            height:100,
            backgroundImage:"url(./public/assets/HERO.png)",
            backgroundRepeat: "no-repeat",
            animation: 'hero-animation 1s steps(4) infinite',
            position:"absolute",
            bottom:48 *2,
            left:48 * 1,
            
            
        }}></div>
       
    )
}
export default Hero