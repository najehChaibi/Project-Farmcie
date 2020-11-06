 import { Pipe, PipeTransform } from '@angular/core';

 @Pipe({
   name: 'filterMedi'
 })
 export class FilterMediPipe implements PipeTransform {

   transform(value: any, q?: any):  any [] {
  //    if( q === '' || q === undefined || q === null){
  //    return null;
  // }
  return value.filter(obj => Object(q => obj[q].includes(q).nom));
  
 }

 }
//.includes(q)