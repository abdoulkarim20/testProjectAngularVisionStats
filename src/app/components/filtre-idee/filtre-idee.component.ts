import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filtre-idee',
  templateUrl: './filtre-idee.component.html',
  styleUrls: ['./filtre-idee.component.css']
})
export class FiltreIdeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //Partie decorator type Input
  @Input() allIdees:number=0;
  @Input() valideIdees:number=0;
  @Input() invalideIdees:number=0

  //Partie decorator type Output
  radioBouttonSelectionner:string='all';
  @Output()
  filterButtonSelectionnerChange = new EventEmitter<any>();

  radioButtonSelectionnerChange(){

    this.filterButtonSelectionnerChange.emit(this.radioBouttonSelectionner);
    //console.log(this.radioBouttonSelectionner)
  }
}
