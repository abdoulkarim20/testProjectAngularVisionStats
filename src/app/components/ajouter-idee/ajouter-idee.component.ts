import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-ajouter-idee',
  templateUrl: './ajouter-idee.component.html',
  styleUrls: ['./ajouter-idee.component.css']
})
export class AjouterIdeeComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  nom:string='';
}
