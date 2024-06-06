//#region CONSTANTS

const METERS = { id: "m", metters: 1 },
    KM = { id: "km", metters: 1000 },
    MILES = { id: "miles", metters: 1609.34 },
    FOOTS = { id: "foots", metters: .3048 },
    CM = { id: "cm", metters: .01 },
    INCHES = { id: "inches", metters: .0254 }

const COMPARATIONS = [
    { base: KM, conversion: MILES },
    { base: MILES, conversion: KM },
    { base: FOOTS, conversion: METERS },
    { base: METERS, conversion: FOOTS },
    { base: CM, conversion: INCHES },
    { base: INCHES, conversion: CM },
]

export const OPTIONS = [
    { id: "kmToMiles", value: "km -> miles" },
    { id: "milesToKm", value: "miles -> km" },
    { id: "footsToMeters", value: "foots -> m" },
    { id: "metersToFoots", value: "m -> foots" },
    { id: "cmToInches", value: "cm -> inches" },
    { id: "inchesToCm", value: "inches -> cm" }
]

const NEXO = 'To'

//#endregion

//#region Methods

const CreateID = (x) => {
    const baseID = x.base.id
    const conversionID = x.conversion.id
    return `${baseID}${NEXO}${conversionID}`
}

const SetOptions = (x, index) => {
    OPTIONS[index].id = CreateID(x)
    OPTIONS[index].value = x
}

COMPARATIONS.forEach((x, index) => SetOptions(x, index))

//    OPTIONS.forEach(x => console.log(x.value))

//#region Methods/Get
//#region Methods/Get/JSON
const OptionValue = option => { return option.value }

const Base = option => { return OptionValue(option).base }
const Conversion = option => { return OptionValue(option).conversion }

export const BaseID = option => { return Base(option).id }
export const ConversionID = option => { return Conversion(option).id }

export const GetOperationName = option => {
    return BaseID(option) + " -> " + ConversionID(option)
}
//#endregion

export const GetOperation = operation => {
    const split = NEXO
    const parts = operation.split(split)
    const base = parts[0]
    const conversion = parts.at(-1)
    const idToSearch = `${base}${NEXO}${conversion}`
    var operationFounded
    OPTIONS.forEach(option => {
        if(option.id == idToSearch){
            operationFounded = option
        }
    })

//    const operationFounded = OPTIONS.find(option => option.id == idToSearch) returns [Object object]
    return operationFounded

}
//#endregion

//#region Methods/Calcs
export const GetResult = (option, amount) => {
    const base = Base(option).metters
    const conversion = Conversion(option).metters

    return (amount * base / conversion).toFixed(2)
}
//#endregion

//#endregion

//export default {OPTIONS, GetOperationName}