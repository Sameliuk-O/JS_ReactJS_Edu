import React, {useEffect, useRef, useState} from "react";
import {Bubbles} from "../component/Bubbles";
import './GamePage.css'

export const GamePage = () => {
    let [renderBubble, setRenderBubble] = useState([
        {x: 50, y: 50},
        {x: 60, y: 925},
        {x: 100, y: 473},
        {x: 500, y: 423},
        {x: 550, y: 1098},
        {x: 300, y: 59},
        {x: 400, y: 716},
        {x: 550, y: 595}]
    )

    const windowSize = useRef([window.innerWidth, window.innerHeight])
    const [count, setCount] = useState(0)


    const deleteBubbles = (event) => {
        setRenderBubble(oldValues => {
            return oldValues.filter(item => item !== event)
        })
        setCount(count + 1)
    }

    const drawBubbles = () => {
        const interval = setInterval(() => {

            const position = {x: Math.floor(Math.random() * (windowSize.current[1] - 100)), y: Math.floor(Math.random() * (windowSize.current[0] - 100))}
            setRenderBubble((oldValue) => ([...oldValue, position]));

        }, 3000);
        return () => clearInterval(interval);
    }

    useEffect(() => {
        drawBubbles()
    }, [])

    return (
        <div className={"game_page"}>
            {renderBubble.map((position) => (
                < Bubbles
                    topPositionBubbles={position.x}
                    leftPositionBubbles={position.y}
                    key={position.x + "+" + position.y}
                    id={position.id}
                    positionBubble={position}
                    deleteFunction={deleteBubbles}
                />
            ))}
            <div>
                Your score {count}
            </div>
        </div>

    )
}