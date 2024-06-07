/* eslint-disable react/prop-types */
import OperationInfo from "./OperationInfo"
import '../css/local/FavouritesComp.css'

const Favourites = ({favorites, remove}) => {
    return (
        <section>
            <label id="saved">saved</label>
            <ul>
                {favorites.map((fav, index) => (
                    <OperationInfo key={index} fav={fav} remove={remove}></OperationInfo>
                ))}
            </ul>
        </section>
    )
}

export default Favourites