import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wishing'
})
export class WishingPipe implements PipeTransform {

  transform(p: any, wish:string):string {
    if(p.gender=='m'){              //checks the gender and returns the value
      return `Hello Mr.${p.Name},${wish}`;
    }
    else{
      return `Hello Miss.${p.Name},${wish}`;
    }
  }

}
