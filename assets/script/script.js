const converNumberInput = document.querySelector(".conver-number");
const unitFrom = document.querySelector(".From");
const unitTo = document.querySelector(".To");
const result = document.querySelector(".result");

document.querySelector(".calculate").addEventListener("click", convert);

function convert() {
    const unitFromValue = unitFrom.value;
    const unitToValue = unitTo.value;
    const converNumber = Number(converNumberInput.value);
    let convertedValue;
    if (unitFromValue === "m" && unitToValue === "cm") {
        convertedValue = converNumber * 100;
    } else if (unitFromValue === "cm" && unitToValue === "m") {
        convertedValue = converNumber / 100;
    } else if (unitFromValue === "m" && unitToValue === "km") {
        convertedValue = converNumber / 1000;
    } else if (unitFromValue === "km" && unitToValue === "m") {
        convertedValue = converNumber * 1000;
    } else {
        convertedValue = converNumber;
    }
    result.value = convertedValue;
}