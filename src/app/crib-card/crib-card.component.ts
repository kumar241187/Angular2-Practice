import { Component, OnInit, Input } from '@angular/core';
import { Crib } from './../crib';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {
  @Input('crib') crib:  Crib; // tells that we have to accept a binding named crib and assign it to local var crib
  constructor() { }

  ngOnInit() {
  }

}
