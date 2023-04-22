import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Estudiante } from '../../../models/estudiante';
import { MatDialog } from '@angular/material/dialog';
import { EditarEstudianteComponent } from '../editar-estudiante/editar-estudiante.component';
import { DetalleCursosComponent } from '../detalle-cursos/detalle-cursos.component';
import { AgregarEstudianteComponent } from '../agregar-estudiante/agregar-estudiante.component';
import { Observable, Subscription } from 'rxjs';
import { CursosService } from '../../services/cursos.service';
import { Store } from '@ngrx/store';
import { eliminarEstudianteState } from '../../state/estudiante-state.actions';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit, OnDestroy {
  dataSource!: MatTableDataSource<Estudiante>;
  suscripcion!: Subscription;
  estudiantes$!: Observable<Estudiante[]>;

  columnas: string[] = [
    'Nombre',
    'Curso',
    'Calificacion',
    'Aprobado',
    'Acciones',
  ];

  constructor(
    private dialog: MatDialog,
    private estudianteService: CursosService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Estudiante>();

    this.suscripcion = this.estudianteService
      .obtenerEstudiantesObservable()
      .subscribe((estudiantes: Estudiante[]) => {
        this.dataSource.data = estudiantes;
      });
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editarDatos(estudiante: Estudiante) {
    this.dialog
      .open(EditarEstudianteComponent, {
        data: estudiante,
      })
      .afterClosed();
  }

  detallesEstudiante(estudiante: Estudiante) {
    this.dialog
      .open(DetalleCursosComponent, {
        data: estudiante,
      })
      .afterClosed();
  }

  addEstudiante() {
    const dialogRef = this.dialog.open(AgregarEstudianteComponent, {});
  }

  eliminarDatos(i: string) {
    this.store.dispatch(eliminarEstudianteState({ i }));
  }
}
