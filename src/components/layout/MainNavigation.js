import { Link } from "react-router-dom"

import classes from './MainNavigation.module.css'

function MainNavigation() {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React MeetUps</div>
            <nav>
                <ul>
                    <li><Link to="/"> Main Meetups </Link></li>
                    <li><Link to="/favorites"> Favorites </Link></li>
                    <li><Link to="/new-meet"> Add Meetup </Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation