import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoHora'
})
export class FormatoHoraPipe implements PipeTransform {

  transform(fecha: Date): string {
    let resultado: string;

    resultado = `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} a las ${fecha.getHours()}:${fecha.getMinutes()}`

    return resultado;
  }

}
