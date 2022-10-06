import {Section} from "./Section";
import {Element} from "./Element";
import {MyCard} from "./MyCard";
import PropTypes from "prop-types";

function City(props) {
    const { city } = props;

    return <MyCard>
        <h5>{city.name}</h5>
        <Element value={city.numberOfPersons} />
    </MyCard>;
}

export function Cities(props) {
    const {cities, title} = props
    return <Section title={title}>
        {cities.map(c => <City key={c.name} city={c} />)}
    </Section>;
}

Cities.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
};