import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-idee',
  templateUrl: './liste-idee.component.html',
  styleUrls: ['./liste-idee.component.css']
})
export class ListeIdeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  hideenDivList:boolean=false;
  noneListeIdee(){
    let statustDive=!this.hideenDivList;
    this.hideenDivList=statustDive;
  }
  totaleSaisie=10;
  restAsaisir=0
  nombreDecaractereSaisie=0
  contenuSaisie(e: any) {
    console.log(e.target.value);
    this.nombreDecaractereSaisie=e.target.value.length
    if (this.nombreDecaractereSaisie>5){
      this.restAsaisir=this.totaleSaisie-this.nombreDecaractereSaisie
      console.log("il vous reste" +this.restAsaisir);
    }
  }
}
