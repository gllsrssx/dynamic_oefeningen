import {Numbers} from "../components/Numbers";
import {useState} from "react";

export function FavoriteNumberPage(props) {
    const { numbers } = props;
    const [ favorite, setFavorite ] = useState();

    const setFavoriteNumber = (n) => {
        setFavorite(n);
    }

    return <div className="mx-3" >
        <Numbers numbers={numbers} title="alle getallen" favoriteNumber={favorite}
                 onSelectNumber={setFavoriteNumber} initOpen={true}/>
        Mijn favoriete getal is {favorite===undefined ? "(niet gekozen)" : favorite}
    </div>
}