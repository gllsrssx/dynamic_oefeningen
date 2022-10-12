import {useState} from "react";
import {Persons} from "../components/Persons";
import {Form} from "react-bootstrap";

export function SearchPersonsPage(props) {
    const { persons } = props;
    const [ search, setSearch ] = useState("");

    return <div className="mx-3" >
        <Form>
            <Form.Label>search:</Form.Label>
            <Form.Control value={search} onChange={(e) => setSearch(e.target.value)} />
        </Form>
        <Persons persons={persons} title="search" initOpen={true} />
    </div>
}