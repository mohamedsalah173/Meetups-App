/* eslint-disable no-unused-vars */
import { createContext,useState } from "react";

const FavoritesContext = createContext({
    favorites:[],
    totalFavorites:0
});


function FavoritesContextProvider(props){

    const[userFavorites,setUserFavorites]=useState([]);

    function addFavoriteHandler(meetup){
        setUserFavorites(prevFavorite=>{
            return prevFavorite.concat(meetup);
        })
    };

    function removeFavoriteHandler(meetupID){
        setUserFavorites(prevFavorite=>{
            return prevFavorite.filter(meetup=> meetup.id !== meetupID);
        })
    };

    function itemIsFavoriteHandler(meetupID){
        setUserFavorites(prevFavorite=>{
            return prevFavorite.some(meetup=> meetup.id===meetupID)
        })
    };


    const context={
        favorites:userFavorites,
        totalFavorites:userFavorites.length,
    };

    return(
        <FavoritesContext.Provider value={context}>
            {props.childern}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider

