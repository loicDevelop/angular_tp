export abstract class Moteur{
    private _vitesse : number;
    private _km : number;

    constructor(vitesse: number, km: number){
        this._vitesse = vitesse;
        this._km = km;
    }

    public get vitesse() {
        return this._vitesse;
    }
    public setVitesse = (vitesse: number) => {
        if (vitesse <= 0) {
            throw new Error('The vitesse is invalid');
        }
        this._vitesse = vitesse;
    }

    public getKm(){
        return this._km;
    }
    public setKm(km: number)  {
        if (km <= 0 ) {
            throw new Error('The kilometrage is invalid');
        }
        this._km = km;
    }

}