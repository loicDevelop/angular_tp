"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moteur = void 0;
var Moteur = /** @class */ (function () {
    function Moteur(vitesse, km) {
        var _this = this;
        this.setVitesse = function (vitesse) {
            if (vitesse <= 0) {
                throw new Error('The vitesse is invalid');
            }
            _this._vitesse = vitesse;
        };
        this._vitesse = vitesse;
        this._km = km;
    }
    Object.defineProperty(Moteur.prototype, "vitesse", {
        get: function () {
            return this._vitesse;
        },
        enumerable: false,
        configurable: true
    });
    Moteur.prototype.getKm = function () {
        return this._km;
    };
    Moteur.prototype.setKm = function (km) {
        if (km <= 0) {
            throw new Error('The kilometrage is invalid');
        }
        this._km = km;
    };
    return Moteur;
}());
exports.Moteur = Moteur;
