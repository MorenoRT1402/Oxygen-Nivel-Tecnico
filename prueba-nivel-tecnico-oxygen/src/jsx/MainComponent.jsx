import { useState } from "react"
import Converter from "./Converter"
import Favourites from './Favourites'

const MainComponent = () => {
    const [ favorites, setFavorites ] = useState([])

    const AddFav = fav => {
        setFavorites(prevFavs => [...prevFavs, fav])
    }

    const RemoveFav = favToRemove => {
        setFavorites(prevFavs => prevFavs.filter(fav => fav !== favToRemove));
    }

    return (
        <main>
        <Converter AddFav={AddFav}></Converter>
        <Favourites favorites={favorites} remove={RemoveFav}></Favourites>
        </main>
    )
}

export default MainComponent