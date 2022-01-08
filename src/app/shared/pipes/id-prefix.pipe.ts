import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idPrefix'
})
export class IdPrefixPipe implements PipeTransform {

  transform(id: number): string {
    return `[${id}] `;
  }
}
