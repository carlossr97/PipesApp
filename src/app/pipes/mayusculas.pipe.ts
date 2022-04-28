import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(string:string,bool:boolean): string {
    if(bool){
      return string.toUpperCase();
    }
    else{
     return string.toLowerCase();
    }
    
  }

}
