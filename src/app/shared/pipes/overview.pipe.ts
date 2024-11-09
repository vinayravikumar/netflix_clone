import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overview',
  standalone:true
})
export class OverviewPipe implements PipeTransform {

  transform(value: string, args?: number): any {
    return `${value.substring(0, args)}...`
  }
  }

