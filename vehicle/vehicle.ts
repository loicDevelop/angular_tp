import { Moteur } from "../composant/moteur";

export abstract class Vehicle{
    private _marque: string;
    private _couleur : string;
    private _prix: number;
    private _moteur : Moteur;

    constructor(marque: string, couleur: string, prix: number, moteur: Moteur){
        this._marque = marque;
        this._couleur = couleur;
        this._prix = prix;
        this._moteur = moteur;
    }

    public get marque () {
        return this._marque;
    }
    public set marque (marque: string) {
        this._marque = marque;
    }

    public get couleur() {
        return this._couleur;
    }
    public set couleur (couleur: string) {
        this._couleur = couleur;
    }


    public get prix()  {
        return this._prix;
    }
    public set prix(prix: number){
        this._prix = prix;
    }

    public get moteur() {
        return this._moteur;
    }
    public set moteur(moteur: Moteur){
        this._moteur = moteur;
    }

}