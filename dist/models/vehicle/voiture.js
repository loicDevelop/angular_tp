"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voiture = void 0;
var vehicle_1 = require("./vehicle");
var Voiture = /** @class */ (function (_super) {
    __extends(Voiture, _super);
    function Voiture(marque, couleur, prix, moteur, poid) {
        var _this = _super.call(this, marque, couleur, prix, moteur) || this;
        _this._poid = poid;
        return _this;
    }
    Voiture.prototype.puissance = function () {
        var res = this.marque + ": " + this._poid + " Kg, roulant à " + this.moteur.vitesse + " km/h";
        res += "\n La puissance de cette voiture est de " + (this.poid * this.moteur.vitesse) + " newton";
        return res;
    };
    Object.defineProperty(Voiture.prototype, "poid", {
        get: function () {
            return this._poid;
        },
        set: function (poid) {
            this._poid = poid;
        },
        enumerable: false,
        configurable: true
    });
    return Voiture;
}(vehicle_1.Vehicle));
exports.Voiture = Voiture;
