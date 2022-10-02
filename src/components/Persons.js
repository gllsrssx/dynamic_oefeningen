import {Section} from "./Section";
import {MyCard} from "./MyCard";

function Person(props) {
    const {person} = props;
    return <MyCard>
        {person}
    </MyCard>
}

export function Persons(props) {
    const {title, persons} = props;
    return <Section title={title}>
        {persons.map(p => <Person key={p.id} person={p}/>)}
    </Section>
}