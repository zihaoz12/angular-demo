import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amplify',
})
export class AmplifyPipe implements PipeTransform {

  transform(value: number,amplifyValue:number): number {
    return value * amplifyValue;
  }

}
