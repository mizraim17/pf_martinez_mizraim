import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Estudiante } from 'src/app/models/estudiante';
import { CursosService } from '../../services/cursos.service';
import { cargarEstudianteState } from '../../state/estudiante-state.actions';
import { EstudianteState } from '../../state/estudiante-state.reducer';

@Component({
  selector: 'app-carga-estudiantes',
  templateUrl: './carga-estudiantes.component.html',
  styleUrls: ['./carga-estudiantes.component.scss'],
})
export class CargaEstudiantesComponent {
  constructor(private store: Store<EstudianteState>) {}

  ngOnInit() {
    this.store.dispatch(cargarEstudianteState());
  }
}
