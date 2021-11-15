"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
    User.prototype.description = function () {
        console.log(this.prenom + " : Hey ! ");
    };
    return User;
}());
exports.User = User;
