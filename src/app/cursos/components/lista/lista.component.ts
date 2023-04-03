import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../../models/estudiante';
import { Observable, Subscription } from 'rxjs';

import { EditarEstudianteComponent } from '../editar-estudiante/editar-estudiante.component';
import { MatDialog } from '@angular/material/dialog';
import { CursosService } from '../../services/cursos.service';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../../../core/services/sesion.service';
import { Store } from '@ngrx/store';
import { EstudianteState } from '../../state/estudiante-state.reducer';
import {
  selectCargandoEstudiantes,
  selectorEstudiantesCargados,
} from '../../state/estudiante-state.selectors';
import {
  cargarEstudianteState,
  eliminarEstudianteState,
  estudianteCargado,
} from '../../state/estudiante-state.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  selectUsuarioActivo,
  selectSesionActiva,
} from '../../../autenticacion/state/auth.selectors';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent {
  estudiantes!: Estudiante;
  estudiantes$!: Observable<Estudiante[]>;
  suscripcion!: Subscription;
  sesion$!: Observable<Sesion>;
  cargando$!: Observable<boolean>;
  user$!: Observable<Usuario | undefined>;

  constructor(
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
    private estudianteService: CursosService,
    private sesion: SesionService,
    private store: Store<EstudianteState>
  ) {}

  filtrar(event: Event) {
    let word = (event.target as HTMLInputElement).value;
    this.estudianteService.filtrarEstudiante(word);
  }

  ngOnInit() {
    this.cargando$ = this.store.select(selectCargandoEstudiantes);

    this.estudiantes$ = this.store.select(selectorEstudiantesCargados);

    this.user$ = this.store.select(selectUsuarioActivo);

    console.log('user$', this.user$);
  }

  editarDatos(estudiante: Estudiante) {
    this.dialog
      .open(EditarEstudianteComponent, {
        data: estudiante,
      })
      .afterClosed();
  }

  eliminarDatos(i: string) {
    this.store.dispatch(eliminarEstudianteState({ i }));
  }
}
