import { Component, OnInit } from '@angular/core';
import { Color, Heroes } from 'src/app/heroes';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  mayus:boolean=false;
  cols: any[]=[];
  ordernarPor:string='';
  heroes:Heroes[]=[{
    nombre:'spiderman',
    vuela:false,
    color: Color.rojo
  },
  {
    nombre:'superman',
    vuela:true,
    color: Color.azul
  },
  {
    nombre:'thor',
    vuela:false,
    color: Color.amarillo
  },
  {
    nombre:'batman',
    vuela:false,
    color: Color.negro
  },
  {
    nombre:'ironman',
    vuela:true,
    color: Color.rojo
  },
  {
    nombre:'hulk',
    vuela:false,
    color: Color.verde
  },
  {
    nombre:'capitan america',
    vuela:false,
    color: Color.azul
  },{
    nombre:'wolverine',
    vuela:false,
    color: Color.negro
  },
  {
    nombre:'robin',
    vuela:false,
    color: Color.azul
  } 
    
  ]

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'nombre', header: 'nombre' },
      { field: 'vuela', header: 'vuela' },
      { field: 'color', header: 'color' }
      
  ];
  }
  cambiar(){
    this.mayus=!this.mayus;
}

  ordenarPor(termino:string){
    this.ordernarPor=termino;
  }


}
