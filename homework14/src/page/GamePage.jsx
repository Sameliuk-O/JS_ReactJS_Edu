import React, { useEffect, useRef, useState } from "react";

import { Bubbles } from "../component/Bubbles";

import './GamePage.css'

export const GamePage = () => {
    const [ renderBubble, setRenderBubble ] = useState( [] )
    const [ count, setCount ] = useState( 0 )

    const windowSize = useRef( [ window.innerWidth, window.innerHeight ] )

    const drawBubbles = () => {
        const interval = setInterval( () => {
            const position = {
                x: Math.floor( Math.random() * (windowSize.current[1] - 100) ),
                y: Math.floor( Math.random() * (windowSize.current[0] - 100) ),
            }
            setRenderBubble( ( oldValue ) => ([ ...oldValue, position ]) );
        }, 3000 );

        return () => clearInterval( interval );
    }

    useEffect( () => {
        drawBubbles()
    }, [] )

    const handleClickBubbleDelete = ( e ) => {
        setRenderBubble( oldValues => {
            return oldValues.filter(
                item => item.x !== e.target.offsetTop && item.y !== e.target.offsetLeft
            )
        } )
        setCount( count + 1 )
    }

    return (
        <div className={ "game-page" } onClick={ handleClickBubbleDelete }>
            { renderBubble.map( ( position ) => (
                < Bubbles
                    topPositionBubbles={ position.x }
                    leftPositionBubbles={ position.y }
                    key={ position.x + "+" + position.y }
                />
            ) ) }
            <div>
                Your score { count }
            </div>
        </div>
    )
}