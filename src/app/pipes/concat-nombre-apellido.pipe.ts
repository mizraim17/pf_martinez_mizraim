import { Pipe, PipeTransform } from '@angular/core';
import { Estudiante } from '../models/estudiante';

@Pipe({
  name: 'concatNombreApellido',
})
export class ConcatNombreApellidoPipe implements PipeTransform {
  transform(element: Estudiante): string {
    let resultado: string;
    resultado = `${element.nombre}  ${element.apellido}`;
    return resultado;
  }
}
