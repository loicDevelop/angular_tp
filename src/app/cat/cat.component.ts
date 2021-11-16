import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor() { }

  cats =[
    {name:"Yummi", couleur: "#778899",
    img:"data:image/jpeg;base64,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",
    img2:"https://i.imgur.com/WtRgv9k.jpg"},

    {name:"DjCat", couleur: "#FFD700",
    img:"https://i.ytimg.com/vi/zafBtiS9qC4/hqdefault.jpg",
    img2:"https://image.winudf.com/v2/image1/Y29tLndoaXRlLmNhdC5tZW1lLnllbGxpbmcuYXRfc2NyZWVuXzBfMTU3Mzk1NTc5N18wODA/screen-0.jpg?fakeurl=1&type=.jpg"},
   
    {name:"ElBro", couleur: "#C49C48", 
    img:"data:image/jpeg;base64,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",
    img2:"https://i.pinimg.com/originals/12/56/00/1256000a71e6e0fbcd09c8505529889f.jpg"},
  ]

  ngOnInit(): void {
  }

  moved(cat : any){
      let tmp = cat.img;
      cat.img = cat.img2;
      cat.img2=tmp;    
  }
}
