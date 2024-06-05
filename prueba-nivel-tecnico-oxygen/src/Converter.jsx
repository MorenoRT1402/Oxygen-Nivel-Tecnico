import Select from "./tools/Select";
import convertIcon from "./assets/Exchange.svg";
import heartIcon from "./assets/Heart.svg";
import "./css/Converter.css";
import { OPTIONS, GetOperationName, GetBaseName, GetResult, GetConversionMeasureName } from "./js/options";
import { useEffect, useState } from "react";

const Converter = () => {
    const defaultOption = OPTIONS[0];
    const [operation, setOperation] = useState(GetOperationName(defaultOption));
    const [baseNumber, setBaseNumber] = useState(100);
    const [baseMeasure, setBaseMeasure] = useState(GetBaseName(defaultOption));
    const [result, setResult] = useState(GetResult(defaultOption, baseNumber));
    const [conversionMeasure, setConversionMeasure] = useState(GetConversionMeasureName(defaultOption));

    useEffect(() => {
//        setResult(GetResult(operation, baseNumber));
    }, [operation, baseNumber]);

    return (
        <section className="converter-box">
            <header>convert</header>
            <div id="inputs">
                <div id="select">
                    <Select options={OPTIONS} onChange={setOperation}></Select>
                    <img src={convertIcon} alt="" />
                </div>
                <div id="input-number">
                    <input type="number" className='input' value={baseNumber} onChange={e => setBaseNumber(e.target.value)} />
                    <label>{baseMeasure}</label>
                </div>
            </div>
            <div id="results">
                <img src={heartIcon} alt="" id='save-btn' />
                <section className="horizontal margin">
                    <h3>{result}</h3>
                    <label>{conversionMeasure}</label>
                </section>
            </div>
        </section>
    );
}

export default Converter;
