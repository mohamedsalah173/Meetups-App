/* eslint-disable no-unused-vars */
import { createContext,useState } from "react";

const FavoritesContext = createContext({
    favorites:[],
    totalFavorites:0,
    addFavorites:(favoriteMeetup)=>{},
    removeFavorite:(MeetupID)=>{},
    itemIsFavorite:(MeetupID)=>{},
});


export function FavoritesContextProvider(props){

    const[userFavorites,setUserFavorites]=useState([]);

    function addFavoriteHandler(meetup){
        setUserFavorites((prevFavorite)=>{
            return prevFavorite.concat(meetup);
        })
    };

    function removeFavoriteHandler(meetupID){
        setUserFavorites(prevFavorite=>{
            return prevFavorite.filter(meetup=> meetup.id !== meetupID);
        })
    };

    function itemIsFavoriteHandler(meetupID){
        return userFavorites.some(meetup=>meetupID===meetup.id)
    };


    const context={
        favorites:userFavorites,
        totalFavorites:userFavorites.length,
        addFavorites:addFavoriteHandler,
        removeFavorite:removeFavoriteHandler,
        itemIsFavorite:itemIsFavoriteHandler,
    };

    return(
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext

