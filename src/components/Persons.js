import {MyCard} from "./MyCard";
import {Element} from "./Element";
import {Section} from "./Section";
import PropTypes from "prop-types";

function Person(props) {
    const { person } = props;

    return <MyCard title={person.name}>
        <h5>{person.name}</h5>
        <Element value={person.age} />
        <Element value={person.city} />
    </MyCard>;
}

export function Persons(props) {
    const {persons, title, initOpen} = props
    return <Section title={title} initOpen={initOpen}>
        {persons.map(p => <Person key={p.id} person={p} />)}
    </Section>;
}

Persons.propTypes = {
    persons: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
};