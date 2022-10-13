import {collection} from 'firebase/firestore';
import {firestoreDB} from "../services/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";

export function PersonsFromDbPage() {
    const collectionRef = collection(firestoreDB, "persons");
    const [values, loading, error] = useCollectionData(collectionRef);
    console.log({values, loading, error});

    return <>
        <div>Persons from DB</div>
    </>
}