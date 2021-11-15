"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(marque, couleur, prix, moteur) {
        this._marque = marque;
        this._couleur = couleur;
        this._prix = prix;
        this._moteur = moteur;
    }
    Vehicle.prototype.fairePleinEssenc = function (quantite, station) {
        var prix = quantite * station.prixEssence;
        console.log('Votre Vehicle a fait son plein pour ' + prix + ' € .');
    };
    Vehicle.prototype.fairePleinELec = function (quantite, station) {
        var prix = quantite * station.prixElec;
        console.log('Votre Vehicle a fait son plein pour ' + prix + ' € .');
    };
    Object.defineProperty(Vehicle.prototype, "marque", {
        get: function () {
            return this._marque;
        },
        set: function (marque) {
            this._marque = marque;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "couleur", {
        get: function () {
            return this._couleur;
        },
        set: function (couleur) {
            this._couleur = couleur;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        set: function (prix) {
            this._prix = prix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "moteur", {
        get: function () {
            return this._moteur;
        },
        set: function (moteur) {
            this._moteur = moteur;
        },
        enumerable: false,
        configurable: true
    });
    return Vehicle;
}());
exports.Vehicle = Vehicle;
