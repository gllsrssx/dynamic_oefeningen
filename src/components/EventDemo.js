import {Section} from "./Section";
import {Button} from "react-bootstrap";

export function EventDemo(props) {
    const { title, initOpen } = props;
    return <Section title={title} initOpen={initOpen}>
            <button onClick={() => alert("I am clicked")}>
                click me please!
            </button>
            <Button className="mt-2" onClick={() => alert("Bootstrap button is clicked")}>
                click me please!
            </Button>
            <div className="mt-2 p-2" style={{backgroundColor: "pink"}}
                 onClick={() => alert("div is clicked")}>
                <p>Dit is een div</p>
                <a href="http://www.thomasmore.be"
                   onClick={(e) => {e.preventDefault();alert("geklikt")}}>
                    dit is een link met een href
                </a> - <button
                    onClick={(e) => {e.stopPropagation();alert("button is clicked")}}>
                    dit is een button
                </button>
            </div>
        </Section>
}