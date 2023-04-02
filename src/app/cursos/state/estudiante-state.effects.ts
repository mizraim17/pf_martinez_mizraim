import { Injectable } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  cargarEstudianteState,
  estudianteCargado,
} from './estudiante-state.actions';
import { concatMap, map } from 'rxjs';
import { Estudiante } from '../../models/estudiante';

@Injectable()
export class EstudianteEffect {
  cargarEstudiantes$ = createEffect(() => {
    return this.action$.pipe(
      ofType(cargarEstudianteState),
      concatMap(() => {
        return this.estudiantes.obtenerEstudiantesObservable().pipe(
          map((c: Estudiante[]) =>
            estudianteCargado({
              estudiantes: c,
            })
          )
        );
      })
    );
  });
  // agregarEstudiante$ = createEffect( );
  // eliminarEstudiante$ = createEffect( );
  // editarEstudiante$ = createEffect( );
  constructor(private estudiantes: CursosService, private action$: Actions) {}
}
