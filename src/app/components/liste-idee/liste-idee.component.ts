import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-idee',
  templateUrl: './liste-idee.component.html',
  styleUrls: ['./liste-idee.component.css']
})
export class ListeIdeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hideenDivList:boolean=false;
  noneListeIdee(){
    let statustDive=!this.hideenDivList;
    this.hideenDivList=statustDive;
  }

}
