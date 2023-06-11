let x: number;
let y: string;
let z: number;
let arr: string[] = [];
let t: any; // same as js'e "let t". TOKIO NENAUDOTI! DIDZIAUSIA TS NUODEME

let cm: string | number; // | = arba
cm = "asdf";
cm = 123;

function logName(name: string, age?: number): void {
  console.log(name);
} // void = nieko negrazinsim sitoj f-ijoj. ? = optional, gali pasiduoti age, gali nepasiduoti

logName("Marius");
logName("Marius", 32);

type Person = {
  readonly id: number; // readonly = negalim keist reiksmes
  name: string;
  tel?: number;
  sayHello: (name: string) => void;
};

// vietoj type sukurimu dar yra tokie interface. Principas ju praktiskai identiskas, bet dazniausiai interface naudojam ant klasiu, o type'us ant objektu, f-iju. Dazniausiai projekto komandoj nusprendziam, kuri naudosim

const person: Person = {
  id: 1,
  name: "Marius",
  sayHello: (name) => {
    console.log(`hello ${name}`);
  },
};

// person.id = 3; // geras dalykas - autocompletion. JS juos ismeta tik tuo atveju, jeigu objektas yra tam paciam faile. Bet TS net jeigu sita objekta grazintume, kitam faile pasiimtume, vis tiek rasytume person. ir matytume, kas gali buti jo viduj

const b = 316_813_516_8; // underscore galim naudot, geriau matyti skaiciu

function mToCm(value: number | string): number {
  if (typeof value === "string") {
    return +value * 100;
  } else {
    return value * 100; // cia tikrai tikrai zinom, kad yra number
  } // dabar bet kokiu atveju grazinam skaiciu
}
