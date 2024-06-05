    //#region CONSTANTS

    const METERS = { id : "m", metters : 1 },
    KM = { id : "km", metters : 1000 },
    MILES = { id : "miles", metters : 1609.34 },
    FOOTS = { id : "foots", metters : .3048 },
    CM = { id : "cm", metters : .01 },
    INCHES = { id : "inches", metters : .0254 }

    const COMPARATIONS = [
        { base : KM, conversion : MILES},
        { base : MILES, conversion : KM},
        { base : FOOTS, conversion : METERS},
        { base : METERS, conversion : FOOTS},
        { base : CM, conversion : INCHES},
        { base : INCHES, conversion : CM},
    ]

    export const OPTIONS = [
        { id : "kmToMiles", value : "km -> miles"},
        { id : "milesToKm", value : "miles -> km"},
        { id : "footsToMeters", value : "foots -> m"},
        { id : "metersToFoots", value: "m -> foots"},
        { id : "cmToInches", value: "cm -> inches"},
        { id : "inchesToCm", value: "inches -> cm"}
    ]

    //#endregion

    //#region Methods

    COMPARATIONS.forEach( (x, index) => OPTIONS[index].value = x)

//    OPTIONS.forEach(x => console.log(x.value))

    //#region Methods/Get

    export const GetOperationName = option => {
        return GetBaseName(option) + " -> " + GetConversionMeasureName(option)
    }

    export const GetBaseName = option => {
        return option.value.base.id
    }

    export const GetConversionMeasureName = option => {
        return option.value.conversion.id
    }
    //#endregion

    //#region Methods/Calcs
    export const GetResult = (option, amount) => {
        const base = option.value.base.metters
        const conversion = option.value.conversion.metters

        return (amount * base / conversion).toFixed(2)
    }
    //#endregion

    //#endregion

//export default {OPTIONS, GetOperationName}