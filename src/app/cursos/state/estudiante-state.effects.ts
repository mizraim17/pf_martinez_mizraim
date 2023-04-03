import { Injectable } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  agregarEstudianteState,
  cargarEstudianteState,
  editarEstudianteState,
  eliminarEstudianteState,
  estudianteCargado,
} from './estudiante-state.actions';
import { concatMap, map } from 'rxjs';
import { Estudiante } from '../../models/estudiante';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class EstudianteEffects {
  cargarEstudiantes$ = createEffect(() => {
    return this.action$.pipe(
      ofType(cargarEstudianteState), //llamando la otra action
      concatMap(() => {
        return this.estudiantes
          .obtenerEstudiantesObservable() //llamo al observale que peticiona
          .pipe(
            map((estudObtenidos: Estudiante[]) =>
              estudianteCargado({
                //llamando a la action
                estudiantes: estudObtenidos,
              })
            )
          );
      })
    );
  });

  agregarEstudiante$ = createEffect(() => {
    return this.action$.pipe(
      ofType(agregarEstudianteState),
      concatMap(({ estudiante }) => {
        return this.estudiantes.agregarEstudiante(estudiante).pipe(
          map((estudiante: Estudiante) => {
            this.snackBar.open(
              `Se agrego estudiante: ${estudiante.nombre}`,
              '',
              {
                duration: 3000,
                panelClass: ['blue-snackbar'],
                horizontalPosition: 'center',
                verticalPosition: 'top',
              }
            );

            this.router.navigate(['cursos/list']);
            return cargarEstudianteState();
          })
        );
      })
    );
  });

  eliminarEstudiante$ = createEffect(() => {
    return this.action$.pipe(
      ofType(eliminarEstudianteState),
      concatMap(({ i }) => {
        return this.estudiantes.eliminarEstudiante(i).pipe(
          map((estudiante: Estudiante) => {
            this.snackBar.open(
              `Se elimino estudiante ${estudiante.nombre}`,
              '',
              {
                duration: 3000,
                panelClass: ['blue-snackbar'],
                horizontalPosition: 'center',
                verticalPosition: 'top',
              }
            );

            this.router.navigate(['cursos/list']);
            return cargarEstudianteState();
          })
        );
      })
    );
  });

  editarEstudiante$ = createEffect(() => {
    return this.action$.pipe(
      ofType(editarEstudianteState),
      concatMap(({ estudiante }) => {
        return this.estudiantes.editarEstudiante(estudiante).pipe(
          map((estudiante: Estudiante) => {
            this.router.navigate(['cursos/list']);
            return cargarEstudianteState();
          })
        );
      })
    );
  });

  // editarEstudiante$ = createEffect( );
  constructor(
    private estudiantes: CursosService,
    private action$: Actions,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}
}
