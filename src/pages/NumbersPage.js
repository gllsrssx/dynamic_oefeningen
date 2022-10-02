import {Numbers} from "../components/Numbers";

export function NumbersPage(props) {
    const { numbers } = props;

    return <div className="mx-3" >
        <Numbers numbers={numbers} title="alle getallen" />
        <Numbers numbers={numbers.filter(n => n > 6)} title="getallen > 6" />
        <Numbers numbers={numbers.map(n => n * 2)} title="getallen verdubbeld" />

    </div>
}