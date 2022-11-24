import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

 transform(image: any, args?: any): string {
   if (!image) {
     return 'assets/img/noimage.png';
   }

   return image;
 }

}
