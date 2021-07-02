import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullnamePipe implements PipeTransform {

  transform(value: string, args:string ): string {
    return value+ " " +args+ " ";
  }

}
