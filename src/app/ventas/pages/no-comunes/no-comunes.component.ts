import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {
  //¡18nSelect
  nombre:string='carlos';
  genero:string='masculino'
  mapa={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }
  observable= interval(1000);
  
   //¡18nPlural
  clientes:string[]=['juan','pepe','mario'];
  mapaPlural={
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    'other':'tenemos # clientes esperando.'

  }



  constructor(private primengConfig: PrimeNGConfig) { 
    
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  cambiarCliente(){
    this.genero='femenino';
    this.nombre='maria'
  }

  borrarCliente(){
    this.clientes.shift();
  }
}
