"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moteurDiesel_1 = require("../models/composant/moteurDiesel");
var moteurEssence_1 = require("../models/composant/moteurEssence");
var StationEssence_1 = require("../models/special/StationEssence");
var voiture_1 = require("../models/vehicle/voiture");
function run(voitures) {
    console.log('Concours de burn ce soir !!');
    console.log("Aujourd'hui, nous retrouvons " + voitures.length + " voitures pour cette course .");
    for (var i = 0; i < voitures.length; i++) {
        console.log('La voiture n°' + (i + 1) + ' , une ' + voitures[i].marque + ' atteignant ' + voitures[i].moteur.vitesse + ' km/h .');
    }
    console.log("3,2,1, ça pars !! \n ");
    for (var i = 0; i < voitures.length; i++) {
        console.log(voitures[i].puissance());
    }
    console.log("\n end of story ...");
}
function plein(voitures) {
    console.log('Session plein');
    var station = new StationEssence_1.StationEssence(3.4, 1.2);
    voitures[0].fairePleinEssenc(32, station);
    voitures[1].fairePleinElec(40, station);
    console.log("\n end of story ...");
}
var moteur1 = new moteurEssence_1.MoteurEssence(78, 18000);
var moteur2 = new moteurDiesel_1.MoteurElectrique(140, 130000);
var voiture1 = new voiture_1.Voiture("Porche", "rouge", 230000, moteur2, 1800);
var voiture2 = new voiture_1.Voiture("207", "blanche", 3500, moteur1, 1100);
var voitures = [voiture1, voiture2];
run(voitures);
