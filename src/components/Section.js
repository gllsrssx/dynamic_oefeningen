import {Button, Container, Row} from "react-bootstrap";
import {useState} from "react";

export function Section(props) {
    const {children, title, initOpen } = props
    const [ isOpen, setIsOpen ] = useState(initOpen);

    return (
        <div className="mt-3 mb-3 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            <h2 className="text-center">
                {title}
                <Button className="ms-2" variant="outline-primary"
                        onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "-" : "+"}
                </Button>
            </h2>
            {isOpen &&
                <Container>
                    <Row>
                        {children}
                    </Row>
                </Container>
            }
        </div>
    );
}