import "./Label.css"

const Label = (props) => {
    return(
    <div className={props.class}>
        <p style={{color: "white" , fontSize: "24px"}}>
            {props.title}: {props.backgroundColor}
        </p>
    </div>
    )
}
export default Label;