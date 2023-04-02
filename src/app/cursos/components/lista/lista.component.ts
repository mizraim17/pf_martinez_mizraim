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
  estudianteCargado,
} from '../../state/estudiante-state.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

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

    this.store.dispatch(cargarEstudianteState());

    this.estudianteService
      .obtenerEstudiantesObservable()
      .subscribe((estudiantes: Estudiante[]) => {
        this.store.dispatch(estudianteCargado({ estudiantes: estudiantes }));
      });

    this.estudiantes$ = this.store.select(selectorEstudiantesCargados);

    this.sesion$ = this.sesion.obtenerSesison();
  }

  editarDatos(estudiante: Estudiante) {
    console.log('estudiante antes lista', estudiante);
    this.dialog
      .open(EditarEstudianteComponent, {
        data: estudiante,
      })
      .afterClosed()
      .subscribe((estudiante: Estudiante) => {
        console.log(' estudiante', estudiante);

        alert('Editado');

        this.estudiantes$ =
          this.estudianteService.obtenerEstudiantesObservable();
      });
  }

  eliminarDatos(i: string) {
    this.estudianteService
      .eliminarEstudiante(i)
      .subscribe((estudiante: Estudiante) => {
        alert(`${estudiante.nombre} eliminado`);

        this.estudiantes$ =
          this.estudianteService.obtenerEstudiantesObservable();
      });
  }
}
