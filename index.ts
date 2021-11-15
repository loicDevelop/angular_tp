import { MoteurElectrique } from "./composant/moteurDiesel";
import { MoteurEssence } from "./composant/moteurEssence";
import { Voiture } from "./vehicle/voiture";

function run(voitures:Voiture[]){
    console.log('Concours de burn ce soir !!');
    console.log("Aujourd'hui, nous retrouvons "+ voitures.length +" voitures pour cette course .")
    for(let i=0; i < voitures.length ; i++ ){
        console.log('La voiture n°'+ (i+1) +' , une '+ voitures[i].marque +' atteignant '+ voitures[i].moteur.vitesse +' km/h .');
    }
    console.log("3,2,1, ça pars !! \n ");
    for(let i=0; i < voitures.length ; i++ ){
       console.log(voitures[i].puissance());
    }
    console.log("\n end of story ...")
}

let moteur1 = new MoteurEssence(78,18000);
let moteur2 = new MoteurElectrique(140,130000)

let voiture1 = new Voiture("Porche", "rouge",230000,moteur2,1800);
let voiture2 = new Voiture("207","blanche", 3500, moteur1,1100)

let voitures:Voiture[] = [voiture1,voiture2];
run(voitures);
