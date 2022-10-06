import {Section} from "./Section";
import {MyCard} from "./MyCard";
import {Element} from "./Element";
import PropTypes from "prop-types";

function Person(props) {
    const { person } = props;
    return <MyCard>
        <h5>{person.name}</h5>
        <Element value={person.age} />
        <Element value={person.city} />
    </MyCard>
}
export function Persons(props) {
    const { title, persons } = props;
    return <Section title={title}>
        {persons.map(p => <Person key={p.id} person={p} />)}
    </Section>
}

Persons.propTypes = {
    persons: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
};