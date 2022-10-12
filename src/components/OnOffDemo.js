import {useState} from "react";
import {MyButton} from "./MyButton";

export function OnOffDemo() {
    const [ isOn, setIsOn ] = useState(false);
    return <div className="mt-2 p-2 border border-primary">
        <p>de huidige waarde van isOn is {isOn ? "ON" : "OFF"}</p>
        <div>
            <MyButton onClick={() => setIsOn(false)}>
                OFF
            </MyButton>
            <MyButton onClick={() => setIsOn(true)}>
                ON
            </MyButton>
            <MyButton onClick={() => setIsOn(!isOn)}>
                toggle
            </MyButton>
        </div>
        <p>de huidige waarde van isOn is {isOn ? "ON" : "OFF"}</p>
    </div>
}