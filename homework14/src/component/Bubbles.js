import "./Bubbles.css"

export const Bubbles = ({topPositionBubbles, leftPositionBubbles, id, deleteFunction, positionBubble}) => {

    const  MouseOver = (event) => {
        event.target.style.background = 'yellow';
    }
    const MouseOut = (event) => {
        event.target.style.background="red";
    }

    return (
        <div style={{ top: topPositionBubbles,
            left: leftPositionBubbles,}} className={"bubbles"} id={id} onMouseOver={MouseOver} onMouseOut={MouseOut}
        onClick={() => deleteFunction(positionBubble)}
        />


    )
}