import Select from "./tools/Select"
import convertIcon from "./assets/Exchange.svg"
import heartIcon from "./assets/Heart.svg"
import "./css/Converter.css"

const Converter = () => {
    const OPTIONS = [
        { id : "kmToMiles", value : "km -> miles"},
        { id : "milesToKm", value : "miles -> km"},
        { id : "footsToMeters", value : "foots -> m"},
        { id : "metersToFoots", value: "m -> foots"},
        { id : "cmToInches", value: "cm -> inches"},
        { id : "inchesToCm", value: "inches -> cm"}
    ]

    return (
        <section className="converter-box">
        <header>convert</header>
        <div id="inputs">
            <div id="select">
                <Select options={OPTIONS} className='input'></Select>
                <img src={convertIcon} alt=""/>
            </div>
            <div id="input-number">
                <input type="text" className='input'/>
                <label>km</label>
            </div>
        </div>
        <div id="results">
            <img src={heartIcon} alt="" id='save-btn'/>
            <section className="horizontal margin">
                <h3>62</h3>
                <label>miles</label>
            </section>
        </div>
        </section>
    )
}

export default Converter