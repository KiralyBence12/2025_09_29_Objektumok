export class Auto{
    constructor(model, evjarat, szin){
    this._model = model;
    this._evjarat = evjarat
    this._szin = szin
    }

    getKor(){
        const aktualisEv = new Date ().getFullYear()
        return aktualisEv - this._evjarat
    }

    get model() {
        return this._model
    }
    set model(_model) {
        this._model = model
    }

    get evjarat() {
        return this._evjarat
    }
    set evjarat(_evjarat) {
        this._evjarat = evjarat
    }

    get szin() {
        return this._szin
    }
    set szin(_szin) {
        this._szin = szin
    }
}