import "./Rectangle.css";

const Rectangle = (props) => {

    return (
        <div className="rectangle" style={{backgroundColor: `rgb(${props.backgroundColor.red.value}, 
        ${props.backgroundColor.green.value}, ${props.backgroundColor.blue.value})`}} onClick={props.onClickRectangle}>
            {props.children}
        </div>
    );
}

export default Rectangle;