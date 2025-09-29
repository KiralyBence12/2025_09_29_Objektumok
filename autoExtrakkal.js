import { Auto } from "./auto.js";

export class AutoExtrakkal extends Auto {
    constructor(model, evjarat, szin, fogyasztas, tankMeret) {
        super(model, evjarat, szin);
        this._fogyasztas = fogyasztas
        this._tankMeret = tankMeret
    }
    get fogyasztas() {
        return this._fogyasztas
    }
    set fogyasztas(fogyasztasErtek) {
        this._fogyasztas = fogyasztasErtek
    }

    get tankMeret(){
        return this._tankMeret
    }
    set tankMeret(tankMeretErtek) {
        this._tankMeret = tankMeretErtek
    }
    
    // hatotav kiszamitasa
    // tankMeret / fogyasztas * 100
    hatotav() {
        return this._tankmeret / this._fogyasztas * 100
    }

    // tankolas koltsege
}