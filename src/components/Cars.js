import PropTypes from "prop-types";
import {Card, Col, Container, Row} from "react-bootstrap";

function Element (props) {
    const { key, value } = props;
    if (!value) return;
    return <div style={{fontsize: "18px"}}>{key} : {value}</div>}

function Car(props) {
    const {car} = props
    return (
        <Col xs={12} sm={6} md={4} lg={3} xL={2} xx1={1}>
        <Card className="m-2 p-2 shadow-sm" >
            <h4>{car.name}</h4>
            <div>merk: {car.brand}</div>
            <div>type: {car.type}</div>
            <dvi>kleur: {car.color}</dvi>
        </Card>
        </Col>
    );
}


export function Cars(props) {
    const {title, cars} = props
    return (
        <div className="mt-3 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            <h2 className="text-center">{title}</h2>
            <Container className={"text-center "} >
                <Row>
                    {cars.map(car => <Car car={car} key={car.id} />)}
                </Row>
            </Container>
        </div>
    );
}

Cars.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string
}
