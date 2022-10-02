import PropTypes from "prop-types";
import {COLORS} from "../data/data";
import {MyCard} from "./MyCard";
import {Section} from "./Section";
import {Element} from "./Element";

function Car(props) {
    const {car} = props
    let style = {};
    if (car.color) {
        style = { color: COLORS.find(c => c.nl===car.color)["foreground"], backgroundColor: COLORS.find(c => c.nl===car.color)["en"]};
    }
    return <MyCard >
            <h4>{car.name}</h4>
            <Element name="merk" value={car.brand} />
            <Element name="type" value={car.type} />
            <Element name="opm" value={car.note} />
            <Element name="kleur" value={car.color} style={style} />
        </MyCard>
}

export function Cars(props) {
    const {title, cars} = props
    return <Section title={title}>
                {cars.map(car => <Car car={car} key={car.id}/>)}
        </Section>
}
Cars.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
    type: PropTypes.string,
    note: PropTypes.string,
    color: PropTypes.string
}
