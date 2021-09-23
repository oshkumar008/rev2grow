import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeFormat'
})
export class ChangeFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.slice(1,5);
  }

}
