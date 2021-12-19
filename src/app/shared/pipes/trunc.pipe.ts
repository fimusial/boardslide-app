import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trunc'
})
export class TruncPipe implements PipeTransform {

  transform(text: string, length: number = 13, suffix: string = '...'): string {
    if (text.length > length) {
      return text.substring(0, length).trim() + suffix;
    }
    return text;
  }
}
