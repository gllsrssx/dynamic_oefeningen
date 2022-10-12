import {useState} from "react";
import {Section} from "./Section";
import {MyButton} from "./MyButton";
import {Counter} from "./Counter";
import {OnOffDemo} from "./OnOffDemo";

function DemoValue(props) {
    const { demoValue, setDemoValue } = props;

    return <div className="mt-2 p-2 border border-primary">
        <div>de waarde van demoValue is {demoValue}</div>
        <div>de waarde van demoValue is {demoValue}</div>
        <div>
            <MyButton onClick={() => setDemoValue(0)}> SET 0 </MyButton>
            <MyButton onClick={() => setDemoValue(77)}> SET 77 </MyButton>
            <MyButton onClick={() => setDemoValue(184)}> SET 184 </MyButton>
        </div>
    </div>
}

function DemoValueReadonly(props) {
    const { demoValue } = props;
    return <div className="mt-2 p-2 border border-primary">
        <div>de waarde van demoValue is {demoValue}</div>
    </div>
}

function DemoValueIncrement(props) {
    const { demoValue, setDemoValue } = props;
    return <div className="mt-2 p-2 border border-primary">
        <MyButton onClick={() => setDemoValue(demoValue + 1)}>demoValue increment</MyButton>
    </div>
}

export function StateDemo(props) {
    const [demoValue, setDemoValue] = useState(0);

    return <Section title="state" initOpen={props.initOpen}>
        <DemoValue demoValue={demoValue} setDemoValue={setDemoValue} />
        <Counter name="counter1" />
        <Counter name="counter2" />
        <OnOffDemo />
        <DemoValueReadonly demoValue={demoValue} />
        <DemoValueIncrement demoValue={demoValue} setDemoValue={setDemoValue} />
    </Section>
}