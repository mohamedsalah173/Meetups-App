import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavoritesContext from '../../store/favorites-context'
import { useContext } from 'react'

function MeetupItem(props){
    const favoriteCtx = useContext(FavoritesContext);
    const isFav = favoriteCtx.itemIsFavorite(props.id);

    function toggleFavoritesHandler(){
        if(isFav){
            favoriteCtx.removeFavorite(props.id)
        }else{
            favoriteCtx.addFavorites({
                id:props.id,
                image:props.image,
                title:props.title,
                address:props.address,
                description:props.description,

        })
        }

    }
    return (
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} ></img>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoritesHandler}>{isFav ?'Remove From Favorite':'Add To Favorites'}</button>
            </div>
            </Card>
        </li>
    )
}

export default MeetupItem