import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/state/app.state';
import {
  cargarEstudiantes,
  estudiantesCargados,
} from 'src/app/core/state/cursos.actions';
import { Estudiante } from 'src/app/models/estudiante';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-carga-estudiantes',
  templateUrl: './carga-estudiantes.component.html',
  styleUrls: ['./carga-estudiantes.component.scss'],
})
export class CargaEstudiantesComponent {
  constructor(
    private store: Store<AppState>,
    private estudianteService: CursosService
  ) {}

  ngOnInit() {
    this.store.dispatch(cargarEstudiantes());
    this.estudianteService
      .obtenerEstudiantesObservable()
      .subscribe((estudiantes: Estudiante[]) => {
        this.store.dispatch(estudiantesCargados({ estudiantes: estudiantes }));
      });
  }
}
