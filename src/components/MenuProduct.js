import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PropTypes from "prop-types";

function ProductSize(props) {
    const {product} = props;
    if (!product.size) return;
    return <span className="productSize">{product.size ? " - " + product.size + "cl" : ""} </span>
}

function ProductNote(props) {
    const {product} = props;
    if (!product.note) return;
    return <span className="note">{product.note ? product.note : ""} </span>
}

export function MenuProduct(props) {
    const {product} = props;
    if (!product?.name) return;
    return <>
        <Container>
            <Row>
                <Col className="menuProduct">
                    {product.name}
                </Col>
                <Col className="menuProduct">
                    {product.price}
                </Col>
                <Row className="menuProduct">
                    <ProductSize product={product}/>
                </Row>
                <Row className="menuProduct">
                    <ProductNote product={product}/>
                </Row>
            </Row>
        </Container>
    </>
}

MenuProduct.propTypes = {
    products: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        size: PropTypes.string,
        note: PropTypes.string
    }).isRequired
}