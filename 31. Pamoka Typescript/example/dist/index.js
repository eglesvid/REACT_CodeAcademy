"use strict";
let x;
let y;
let z;
let arr = [];
let t; // same as js'e "let t". TOKIO NENAUDOTI! SHAME!1!
let cm; // | = arba
cm = "asdf";
cm = 123;
function logName(name, age) {
    console.log(name);
} // void = nieko negrazinsim sitoj f-ijoj. ? = optional, gali buti sitas dalykas, gali nebuti
logName("Marius");
logName("Marius", 32);
// interface = ant klasiu dazniausiai naudojam, type = ant objektu. Dazniausiai komandoj nusprendziam, kuri naudosim
const person = {
    id: 1,
    name: "Marius",
    sayHello: (name) => {
        console.log(`hello ${name}`);
    },
};
// person.id = 3; // geras dalykas - autocompletion
const b = 3168135168; // underscore galim naudot, geriau matyti skaiciu
function mToCm(value) {
    if (typeof value === "string") {
        return +value * 100;
    }
    else {
        return value * 100;
    } // dabar bet kokiu atveju grazinam skaiciu
}
