import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-filtre-idee',
  templateUrl: './filtre-idee.component.html',
  styleUrls: ['./filtre-idee.component.css']
})
export class FiltreIdeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() allIdees:number=0;
  @Input() valideIdees:number=0;
  @Input() invalideIdees:number=0
}
