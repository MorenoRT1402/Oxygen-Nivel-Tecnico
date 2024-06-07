import '../css/local/generic.css'
import UnitConvertionHeader from "./UnitConvertionHeader"
import MainComponent from "./MainComponent"

function App() {

    return (
        <>
        <header>
            <UnitConvertionHeader></UnitConvertionHeader>
        </header>
        <MainComponent></MainComponent>
        <footer>
            <h3>Terms of Service</h3>
            <h3>Privacy policy</h3>
        </footer>
        </>
    )
}

export default App