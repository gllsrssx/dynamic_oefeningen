import PropTypes from "prop-types";
import {MyCard} from "./MyCard";
import {Section} from "./Section";


function Number(props) {
    const {number} = props;
    return <MyCard>
        {number}
    </MyCard>
}

export function Numbers(props) {
    const {numbers, title} = props
    return <Section title={title}>
        {numbers.map((n, i) =>
            <Number key={i} number={n}/>)}
    </Section>
}

Numbers.propTypes = {
    numbers: PropTypes.array,
    title: PropTypes.string
}
