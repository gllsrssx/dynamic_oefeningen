import {collection} from 'firebase/firestore';
import {firestoreDB} from "../services/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Persons} from "../components/Persons";
import {useState} from "react";
import {Form} from "react-bootstrap";

const personConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id};
    }
}

export function PersonsFromDbPage() {
    const collectionRef = collection(firestoreDB, "persons").withConverter(personConverter);
    const [values, loading, error] = useCollectionData(collectionRef);
    console.log({values, loading, error});
    const [search, setSearch] = useState("");

    return <>
        <Form>
            <Form.Label>search: </Form.Label>
            <Form.Control value={search} onChange={e => setSearch(e.target.value)}> </Form.Control>
        </Form>
        <Persons persons={values && values.filter(p =>
            p.name?.toLowerCase().includes(search.toLowerCase()) ||
            p.city?.toLowerCase().includes(search.toLowerCase()) )}
                 title="Persons from DB" initOpen={true}/>
    </>
}