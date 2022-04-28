import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../heroes';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes:Heroes[],ordenarPor:string): Heroes[] {
    
    if (ordenarPor == 'nombre') {
      heroes=heroes.sort(  (a,b)=> (a.nombre > b.nombre) ? 1 : -1  );
     
    return heroes;
    }
    if (ordenarPor=='vuela'){
      heroes=heroes.sort(  (a,b)=> (a.vuela < b.vuela) ? 1 : -1  );
      return heroes;
    }
    if (ordenarPor=='color'){
      heroes=heroes.sort(  (a,b)=> (a.color > b.color) ? 1 : -1 );
     
      return heroes;
      
    }    
    else{
      return heroes;
    }

  }

}
