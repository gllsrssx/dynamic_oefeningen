import {Persons} from "../components/Persons";
import {Numbers} from "../components/Numbers";
import {Cities} from "../components/Cities";
import {citiesFromPersons} from "../utilities/personUtilities";

const CITY_DATA = [
    {name: "Antwerpen", numberOfPersons: 125},
    {name: "Brussel", numberOfPersons: 32},
];

export function PersonsPage(props) {
    const {persons} = props;
    return (
        <div className="mx-3">
            <Persons persons={persons} title="Alle personen"/>
            <Persons persons={[...persons].sort((p1, p2) => p2.age - p1.age)} title="Alle personen volgens Leeftijd"/>
            <Numbers title="leeftiiden" numbers={persons.map(p => p.age)}/>
            <Numbers title="leeftijden gesorteerd"
                     numbers={[...new Set(persons.map(p => p.age))].sort((n1, n2) => n2 - n1)}/>
            <Cities cities={CITY_DATA} title="steden test"/>
            <Cities cities={citiesFromPersons(persons)} title="steden van alle personen"/>
        </div>
    );
}