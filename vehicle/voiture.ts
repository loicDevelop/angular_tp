import { Moteur } from "../composant/moteur";
import { Vehicle } from "./vehicle";

export class Voiture extends Vehicle{
    private _poid : number;

    constructor(marque: string, couleur: string, prix: number, moteur: Moteur, poid:number){
        super(marque,couleur,prix,moteur);
        this._poid = poid;
    }
 
    public puissance(){
        let res = this.marque+ ": "+this._poid+" Kg, roulant à "+ this.moteur.vitesse +" km/h";
        res += "\n La puissance de cette voiture est de "+ (this.poid * this.moteur.vitesse) +" newton";
        return res;
    }

    public get poid() {
        return this._poid;
    }

    public set poid(poid: number) {
        this._poid=poid;
    }
}