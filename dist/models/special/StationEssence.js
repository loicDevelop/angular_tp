"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationEssence = void 0;
var StationEssence = /** @class */ (function () {
    function StationEssence(prixEssence, prixElec) {
        this._prixElec = 4;
        this._prixEssence = 10;
        this._prixEssence = prixEssence;
        this._prixElec = prixElec;
    }
    Object.defineProperty(StationEssence.prototype, "prixElec", {
        get: function () {
            return this._prixElec;
        },
        set: function (prixElec) {
            this._prixElec = prixElec;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StationEssence.prototype, "prixEssence", {
        get: function () {
            return this._prixEssence;
        },
        set: function (prixEssence) {
            this._prixEssence = prixEssence;
        },
        enumerable: false,
        configurable: true
    });
    return StationEssence;
}());
exports.StationEssence = StationEssence;
