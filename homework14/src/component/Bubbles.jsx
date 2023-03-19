import "./Bubbles.css"

export const Bubbles = ( { topPositionBubbles, leftPositionBubbles } ) => {
    return (
        <div style={ {
            top: topPositionBubbles,
            left: leftPositionBubbles,
        } } className={ "bubbles" }
        />
    )
}