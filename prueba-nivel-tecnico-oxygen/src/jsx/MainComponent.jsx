import Converter from "./Converter"
import Favourites from './Favourites'

const MainComponent = () => {
    return (
        <main className="vertical">
        <Converter></Converter>
        <Favourites></Favourites>
        </main>
    )
}

export default MainComponent