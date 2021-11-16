import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  constructor() { }

  utilisateurs = [
    {nom: "Loïc" , prenom: "Courbon"},
    {nom: "Thomas" , prenom: "Profesor"},
    {nom: "Lucie" , prenom: "Dailleur"},
  ]

  imgUrl : string = "https://www.clipartmax.com/png/middle/354-3544458_post-profile-pic-for-meme-page.png";
  
  ngOnInit(): void {
  }

  eventAdd(utilisateur : any){
    alert("Click pas comme ça le sang "+ utilisateur.name)
  }
}
