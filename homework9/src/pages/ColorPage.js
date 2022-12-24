import "./style.css";
import Rectangle from "../component/Rectangle";
import Label from "../component/Label"
import {useState} from "react";

const defRed = 127;
const defGreen = 127;
const defBlue = 127;

const initialState = {

    red: {
        value: defRed,
        historyColor: [defRed]
    },

    green: {
        value: defGreen,
        historyColor: [defGreen]
    },

    blue: {
        value: defBlue,
        historyColor: [defBlue]
    },

    dominateColor: "All colors are equal",

    averageColor: {
        red: defRed,
        green: defGreen,
        blue: defBlue,

    }


}


const ColorPage = () => {

    const [backgroundColor, setBackgroundColor] = useState(initialState);

    const getDominateColor = (valueRed, valueGreen, valueBlue) => {
        if (valueRed > ((valueGreen + valueBlue) / 2)) {
            return "Red"
        } else if (valueGreen > ((valueRed + valueBlue) / 2)) {
            return "Green"
        } else if (valueBlue > ((valueGreen + valueRed) / 2)) {
            return "Blue"
        }else{
            return "All colors are equal"
        }
    }

    const averageColor = (value) => {
        return Math.round(value.reduce((partialSum, a) => partialSum + a, 0)/value.length);
    }

    const onClickRectangle = () => {
        const newRed =  Math.floor(Math.random() * 255);
        const newGreen = Math.floor(Math.random() * 255);
        const newBlue = Math.floor(Math.random() * 255);



        setBackgroundColor((prev) => (

            {

            red: {
                value: newRed,
                historyColor: [...prev.red.historyColor, newRed]
            },

            green: {
                value: newGreen,
                historyColor: [...prev.green.historyColor, newGreen]
            },

            blue: {
                value: newBlue,
                historyColor: [...prev.blue.historyColor, newBlue]
            },

            dominateColor: getDominateColor(newRed, newGreen, newBlue),

            averageColor: {
                red: averageColor([...prev.red.historyColor, newRed]),
                green: averageColor([...prev.green.historyColor, newGreen]),
                blue: averageColor([...prev.blue.historyColor, newBlue]),

            }

        }))

    }

    return (
        <Rectangle backgroundColor={backgroundColor} onClickRectangle={onClickRectangle}>
            <Label title = {"The average color is"}
                   backgroundColor = {"rgb(" + backgroundColor.averageColor.red + "," + backgroundColor.averageColor.green
                       + "," + backgroundColor.averageColor.blue + ")"} class = {"label-average"}/>
            <Label title = {"Dominate color"} backgroundColor = {backgroundColor.dominateColor} class = {"label-dominant"}/>

        </Rectangle>
    );
}

export default ColorPage;
