/*
    cas: je doba v sekundách, po kterou trouba
    odebírala uvedený příkon
    spotreba: je kolik energie by bylo spotřebováno,
    pokud by takto trouba pekla celou hodinu
    (jsou to watthodiny [Wh])

    pro cas: 600s a spotreba: 3500 Wh je skutečné
    odebrané množství "energie":
    3500 * (600 / 3600) === 3500 * (1/6) === 583,333W
*/


// Pan učitel //

/*
type Odber = {
    cas: number, //čas je v sekundách
    spotreba: number //spotřeba ve watech za hodinu
}
const cena: number = 6.70; // Kč / kWh
let data: Array<Odber> = [
    { cas: 600, spotreba: 3500 },
    { cas: 120, spotreba: 0 },
    { cas: 300, spotreba: 1700 }, // data[2].cas
    { cas: 60, spotreba: 0 },
    { cas: 800, spotreba: 1500 },
]

for (const peceme of data){
    console.logValue("čas: ", peceme.cas);
    console.logValue("spotřeba: ", peceme.spotreba);
    console.logValue("spotřebováno: ", peceme.spotreba / 3600 * peceme.cas);
}

*/


type Odber = {
    cas: number, //cas = ms
    prikon: number; //prikon = watty
}

let data: Array<Odber> = [
    { cas: 1000, prikon: 3500 },  // W/H
    { cas: 3000, prikon: 4000 },
    { cas: 2000, prikon: 3500 },
    { cas: 4000, prikon: 4000 },
    { cas: 2000, prikon: 3500 }, // W/S
]

//kilowatt = 6,7Kc

let prikonSoucet: number = 0
let casSoucet: number = 0
let celkWatt: number = 0
let celkWatt1: number = 0
let celkSpotreba: number = 0

for (let i of data) {
    casSoucet += i.cas / 1000
    prikonSoucet += i.prikon / 3600
}


celkWatt = (prikonSoucet / casSoucet) * 3.6  // kW/h
celkSpotreba = celkWatt * 6.7

console.log("Celkem vás to vyšlo na " + celkSpotreba + " Kč")
console.log("Pekli jsme " + casSoucet + " vteřin")
console.log("Celkové kilowatt hodiny jsou " + celkWatt + " kW")





