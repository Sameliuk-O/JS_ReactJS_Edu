import {useRef} from "react";

export const Bubbles = ({topPositionBubbles, leftPositionBubbles, id, deleteFunction, positionBubble}) => {
    const ChipStyles ={
        position: 'absolute',

        backgroundColor: 'Red',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        border: '1px solid black'
    };

    const  MouseOver = (event) => {
        event.target.style.background = 'yellow';
    }
    const MouseOut = (event) => {
        event.target.style.background="red";
    }

    return (
        <div style={{...ChipStyles, top: topPositionBubbles,
            left: leftPositionBubbles,}} className={"bubbles"} id={id} onMouseOver={MouseOver} onMouseOut={MouseOut}
        onClick={() => deleteFunction(positionBubble)}
        />


    )
}