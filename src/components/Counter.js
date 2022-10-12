import {useState} from "react";
import {MyButton} from "./MyButton";

export function Counter(props) {
    const { name } = props;
    const [ counter, setCounter ] = useState(0);
    return <div className="mt-2 p-2 border border-primary">
        <p>de waarde van {name} is {counter}</p>
        <div>
            <MyButton onClick={() => setCounter(0)}>
                CLEAR
            </MyButton>
            <MyButton onClick={() => setCounter(counter - 1)}>
                -
            </MyButton>
            <MyButton onClick={() => setCounter(counter + 1)}>
                +
            </MyButton>
        </div>
    </div>
}