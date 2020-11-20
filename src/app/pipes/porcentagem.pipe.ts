import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'porcentagem'
})
export class PorcentagemPipe implements PipeTransform {

  transform(value: number): number {
    return ((value / 200) * 100);
  }

}
