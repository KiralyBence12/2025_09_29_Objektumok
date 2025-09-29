import { Auto } from "./auto.js"
import { AutoExtrakkal } from "./autoExtrakkal.js"

const auto1 = new Auto("Toyota Corolla", 2015, "Feher")

console.log(`${auto1.model} evjarat: ${auto1.evjarat} kora: ${auto1.getKor()} ev, ${auto1.szin}`)
auto1._szin = "piros"
console.log(`Megvaltoztatott szin: ${auto1.model}, ${auto1.evjarat} evjarat, ${auto1.szin}`)

const autoExtr1 = new AutoExtrakkal("Honda Civic", 2020, "zold", 6.5, 50)

console.log(`${autoExtr1.model}, ${autoExtr1.evjarat}, fogyasztas: ${autoExtr1.fogyasztas}, tankmeret: ${autoExtr1.tankMeret} hatotav: ${autoExtr1.hatotav()}`)
