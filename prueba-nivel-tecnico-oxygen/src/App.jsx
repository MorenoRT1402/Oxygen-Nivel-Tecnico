import UnitConvertionHeader from "./UnitConvertionHeader"
import Converter from "./Converter"
import './css/generic.css'
// import "./css/App.css"
// import "./css/Converter.css"

function App() {

    return (
        <>
        <header>
            <UnitConvertionHeader></UnitConvertionHeader>
        </header>
        <main className="vertical">
        <Converter></Converter>
        <section>
            <label>saved</label>
        </section>
        </main>
        <footer>
            <h3>Terms of Service</h3>
            <h3>Privacy policy</h3>
        </footer>
        </>
    )
}

export default App