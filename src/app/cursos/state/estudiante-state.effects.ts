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
export class EstudianteEffects{

  cargarEstudiantes$ = createEffect(() => {
    return this.action$.pipe(
      ofType(cargarEstudianteState), //llamando la otra action
      concatMap(() => {
        return this.estudiantes.obtenerEstudiantesObservable() //llamo al observale que peticiona
          .pipe(
          map((estudObtenidos: Estudiante[]) =>
            estudianteCargado({ //llamando a la action
              estudiantes: estudObtenidos   ,
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
