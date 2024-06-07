import OperationInfo from "./OperationInfo"
import '../css/local/FavouritesComp.css'

const Favourites = () => {
    return (
        <section>
            <label className="text-center">saved</label>
            <ul>
                <OperationInfo></OperationInfo>
                <OperationInfo></OperationInfo>
            </ul>
        </section>
    )
}

export default Favourites