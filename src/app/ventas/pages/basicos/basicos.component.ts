import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower:string='carlos';
  nombreUpper:string='CARLOS';
  nombreCompleto:string='cArLoS';
  fecha:Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
