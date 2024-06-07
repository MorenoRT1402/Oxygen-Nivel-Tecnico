import Select from "./tools/Select";
import convertIcon from "../assets/Exchange.svg";
import heartIcon from "../assets/Heart.svg";
import '../css/local/Converter.css';
import { OPTIONS, BaseID, GetResult, ConversionID, GetOperation } from "../js/options";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Converter = ({ AddFav }) => {
    const defaultOption = OPTIONS[0];
    const [operation, setOperation] = useState(defaultOption);
    const [baseNumber, setBaseNumber] = useState(100);
    const [baseMeasure, setBaseMeasure] = useState(BaseID(defaultOption));
    const [result, setResult] = useState(GetResult(defaultOption, baseNumber));
    const [conversionMeasure, setConversionMeasure] = useState(ConversionID(defaultOption));

    useEffect(() => {
        const result = GetResult(operation, baseNumber)
        setResult(result);
    }, [operation, baseNumber]);

    useEffect(() => {
        setBaseMeasure(BaseID(operation))
        setConversionMeasure(ConversionID(operation))
    }, [operation])

    const getOperation = operation => {
        const optToSet = GetOperation(operation)
        setOperation(optToSet)
    }

    const AddToFavorites = () => {
        const fav = `${baseNumber} ${baseMeasure} → ${result} ${conversionMeasure}`
        AddFav(fav)

        // empty input
        setBaseNumber(0)
    }

    return (
        <section className="converter-box min-width">
            <header>convert</header>
            <div id="inputs">
                <div id="select">
                    <Select options={OPTIONS} setter={getOperation}></Select>
                    <img src={convertIcon} alt="" />
                </div>
                <div id="input-number">
                    <input type="number" className='input' value={baseNumber} onChange={e => setBaseNumber(e.target.value)} />
                    <label>{baseMeasure}</label>
                </div>
            </div>
            <div id="results">
                <button onClick={AddToFavorites}><img src={heartIcon} alt=""/></button>
                <section className="horizontal margin">
                    <h3>{result}</h3>
                    <label>{conversionMeasure}</label>
                </section>
            </div>
        </section>
    );
}

export default Converter;
