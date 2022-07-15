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
  hideenDivList:boolean=true;
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
  idees=[
    {
      id:1,
      titre:"Idee 1",
      contenu:"Apprentissage de concept de data binding",
      status:true
    },
    {
      id:2,
      titre:"Idee 2",
      contenu:"Apprentissage de concept de data binding",
      status:false
    },
    {
      id:3,
      titre:"Idee 3",
      contenu:"Apprentissage de concept de data binding",
      status:true
    },
    {
      id:4,
      titre:"Idee 4",
      contenu:"Apprentissage de concept de data binding",
      status:false
    },
    {
      id:5,
      titre:"Idee 5",
      contenu:"Apprentissage de concept de data binding",
      status:false
    }
  ]
  getAllIdees(){
    return this.idees.length;
  }
  getAllIdeesValide(){
    return this.idees.filter(idee=>idee.status==true).length
  }
  getAllIdeesInvalide(){
    return this.idees.filter(idee=>idee.status==false).length
  }

  ideesRadioButton:string='all';
  onFilterRadioButtonChange(data:any){
    this.ideesRadioButton=data;
    console.log(this.ideesRadioButton);
  }

}
