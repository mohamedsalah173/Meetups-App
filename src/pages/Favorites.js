/* eslint-disable no-unused-vars */
import { useContext } from "react"
import FavoritesContext from "../store/favorites-context"
import MeetupsList from "../components/meetups/MeetupsList"

function Favorites(props) {
    const favoriteCtx = useContext(FavoritesContext);
    let content;
    if(favoriteCtx.favorites.length===0){
        content = <h2>you did not add any favorite yet!!!</h2>
    }else{
        content = <MeetupsList meetups={favoriteCtx.favorites} />
    }
    return (
        <div>
            {content}
        </div>
    )

}

export default Favorites