import React from "react";
import useEventListener from '@use-it/event-listener'
import "./style.css"
import { HERO_HELMET_OFFSET, TILE_SIZE} from "../../settings/consts";

const initialPosition = {
    x:1,
    y:2
}

const Hero = () => {
    const [positionState,positionUpdateState ] = React.useState(initialPosition);

    useEventListener('keydown',(event:any) => {
        if(event.key === 'ArrowLeaft') {
            console.log('<-')
        } else
        if(event.key === 'ArrowRight') {
            console.log('->')
        } else
        if(event.key === 'ArrowDown') {
            console.log('V')
        } else
        if(event.key === 'ArrowUp') {
            console.log('^')
        } 

    } )

    setTimeout(() => {
       const newPosition = {x:1,y:12};
       positionUpdateState(newPosition)
    }, 2000);

    

    return (
        <div
        style={{
            position:"absolute",
            bottom:TILE_SIZE * positionState.y,
            left:TILE_SIZE * positionState.x,

            width:TILE_SIZE,
            height:TILE_SIZE + HERO_HELMET_OFFSET,
            backgroundImage:"url(./public/assets/HERO.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition:`0px -${TILE_SIZE - HERO_HELMET_OFFSET}px `,
            animation: 'hero-animation 0.5s steps(4) infinite',
        }}>

        </div>
       
    )
}
export default Hero