import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thcard'
})
export class ThaiCardPipe implements PipeTransform {

  transform(value: string|null, ...args: any[]): any {
    return value?.replace(/^(\d{1})(\d{4})(\d{5})(\d{2})(\d{1})$/, "$1-$2-$3-$4-$5") || value;
  }

}
