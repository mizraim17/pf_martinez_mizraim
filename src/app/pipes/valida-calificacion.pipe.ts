import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validaCalificacion',
})
export class ValidaCalificacionPipe implements PipeTransform {
  transform(element: number): string {
    return element >= 6 ? 'aprobado' : 'reprobado';
  }
}
