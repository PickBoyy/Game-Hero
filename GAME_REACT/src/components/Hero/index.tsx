import React from "react";
import "./style.css"
import { HERO_HELMET_OFFSET, TILE_SIZE, ZERO } from "../../settings/consts";

const Hero = () => {
    return (
        <div
        style={{
            width:TILE_SIZE,
            height:TILE_SIZE + HERO_HELMET_OFFSET,
            backgroundImage:"url(./public/assets/HERO.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition:`0px -${TILE_SIZE - HERO_HELMET_OFFSET}px `,
            animation: 'hero-animation 0.5s steps(4) infinite',
            position:"absolute",
            bottom:TILE_SIZE * 13,
            left:TILE_SIZE * 2,
            
            
        }}></div>
       
    )
}
export default Hero