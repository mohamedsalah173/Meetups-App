import { Link } from "react-router-dom"

function MainNavigation(){

    return(
        <div>
                <Link to="/"> Main Meetups </Link>
                <Link to="/hamada"> Favorites </Link>
                <Link to ="/new-meet"> Add meet up </Link>
        </div>
    )
}

export default MainNavigation