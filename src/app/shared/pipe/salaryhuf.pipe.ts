import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryhuf',
  standalone: true
})
export class SalaryhufPipe implements PipeTransform {

  transform(value: number): string {
    return value + ' Ft';
  }

}
