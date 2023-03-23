import {
  Component,
  ViewChild,
  AfterViewInit,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Estudiante } from '../../../models/estudiante';
import { MatDialog } from '@angular/material/dialog';
import { EditarEstudianteComponent } from '../editar-estudiante/editar-estudiante.component';

import { AgregarEstudianteComponent } from '../agregar-estudiante/agregar-estudiante.component';
import { Observable, Subscription } from 'rxjs';
import { CursosService } from '../../services/cursos.service';

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
    private estudianteService: CursosService
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
      .afterClosed()
      .subscribe((estudiante: Estudiante) => {
        console.log('estudante lista', estudiante.nombre);

        this.estudiantes$ =
          this.estudianteService.obtenerEstudiantesObservable();

        this.suscripcion = this.estudianteService
          .obtenerEstudiantesObservable()
          .subscribe((estudiantes: Estudiante[]) => {
            this.dataSource.data = estudiantes;
          });
      });
  }

  addEstudiante() {
    const dialogRef = this.dialog.open(AgregarEstudianteComponent, {});
  }

  eliminarDatos(i: string) {
    this.estudianteService
      .eliminarEstudiante(i)
      .subscribe((estudiante: Estudiante) => {
        alert(`${estudiante.nombre} eliminado`);

        this.estudiantes$ =
          this.estudianteService.obtenerEstudiantesObservable();

        this.suscripcion = this.estudianteService
          .obtenerEstudiantesObservable()
          .subscribe((estudiantes: Estudiante[]) => {
            this.dataSource.data = estudiantes;
          });
      });
  }
}
