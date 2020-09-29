const celInp = document.querySelector('#cel > input') ;
const fahInp = document.querySelector('#fah > input') ;
const kelInp = document.querySelector('#kel > input') ;

function roundNum(num) { /* Função para arredondar os numeros. */
    return Math.round(num * 100) / 100;
}

function celTofahAndKel() {
    const cTemp = parseFloat(celInp.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    fahInp.value = roundNum(fTemp);
    kelInp.value = roundNum(kTemp);
}

function fahToCelAndKel() {
    const fTemp = parseFloat(fahInp.value);
    const cTemp = (fTemp - 32) * 5/9;
    const kTemp = (fTemp + 459.67) * 5/9;
    celInp.value = roundNum(cTemp);
    kelInp.value = roundNum(kTemp);
}

function kelToCelAndFah() {
    const kTemp = parseFloat(kelInp.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9/5 * (kTemp - 273) + 32;
    celInp.value = roundNum(cTemp);
    fahInp.value = roundNum(fTemp);
}

function main() {
    celInp.addEventListener('input', celTofahAndKel);
    fahInp.addEventListener('input', fahToCelAndKel);
    kelInp.addEventListener('input', kelToCelAndFah);
}

main();
