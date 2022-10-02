import {Cars} from "../components/Cars";

export function CarsPage(props) {
    const { cars } = props;

    return (
        <Cars cars={cars} title="Auto's" />
    );
}