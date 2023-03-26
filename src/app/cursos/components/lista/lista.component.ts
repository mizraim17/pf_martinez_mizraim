import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../../models/estudiante';
import { Observable, Subscription } from 'rxjs';

import { EditarEstudianteComponent } from '../editar-estudiante/editar-estudiante.component';
import { MatDialog } from '@angular/material/dialog';
import { CursosService } from '../../services/cursos.service';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../../../core/services/sesion.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/state/app.state';
import {
  selectorCargandoEstudiantes,
  selectorEstudiantesCargados,
} from '../../../core/state/cursos.selectors';
import {
  cargarEstudiantes,
  estudiantesCargados,
} from '../../../core/state/cursos.actions';

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

  constructor(
    private dialog: MatDialog,
    private estudianteService: CursosService,
    private sesion: SesionService,
    private store: Store<AppState>
  ) {}

  filtrar(event: Event) {
    let word = (event.target as HTMLInputElement).value;
    this.estudianteService.filtrarEstudiante(word);
  }

  ngOnInit() {
    this.store.dispatch(cargarEstudiantes());
    this.estudianteService
      .obtenerEstudiantesObservable()
      .subscribe((estudiantes: Estudiante[]) => {
        this.store.dispatch(estudiantesCargados({ estudiantes: estudiantes }));
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
        console.log('estudante lista ===>', estudiante);

        // alert(`Editado  `);
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
