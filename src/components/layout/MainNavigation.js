import { Link } from "react-router-dom"
import FavoritesContext from "../../store/favorites-context"
import { useContext } from "react"
import classes from './MainNavigation.module.css'

function MainNavigation() {
    const favoriteCtx = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React MeetUps</div>
            <nav>
                <ul>
                    <li><Link to="/"> Main Meetups </Link></li>
                    <li><Link to="/new-meet"> Add Meetup </Link></li>
                    <li><Link to="/favorites"> Favorites<span className={classes.badge}>{favoriteCtx.favorites.length}</span> </Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation