import {Pipe, PipeTransform } from '@angular/core';

@Pipe ({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform (value: string, limit: number, ellipsis: string = ''): any {

    return value.length> limit? value.substr (0, limit) + ellipsis: value;    

  }

}
