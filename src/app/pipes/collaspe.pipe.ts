import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'collaspe',
})
export class CollaspePipe implements PipeTransform {

  transform(value: string, args: any): any {
    return value && value.length > args ? value.slice(0, args) : value;
  }

}
