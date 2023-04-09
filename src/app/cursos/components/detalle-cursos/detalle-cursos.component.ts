import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiante } from 'src/app/models/estudiante';
import { CursosService } from '../../services/cursos.service';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalle-cursos',
  templateUrl: './detalle-cursos.component.html',
  styleUrls: ['./detalle-cursos.component.scss'],
})
export class DetalleCursosComponent implements OnInit {
  dataSource!: MatTableDataSource<Estudiante>;
  suscripcion!: Subscription;
  formulario: FormGroup;

  estudiantes$!: Observable<Estudiante[]>;

  constructor(
    private estudianteService: CursosService,
    private dialogRef: MatDialogRef<DetalleCursosComponent>,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data: Estudiante
  ) {
    console.log('data.nombre', data.nombre);

    let controles: any = {
      nombre: new FormControl(data.nombre, [Validators.required]),
      apellido: new FormControl(data.apellido, [Validators.required]),
      curso: new FormControl(data.curso, [Validators.required]),
      correo: new FormControl(data.correo, [
        Validators.required,
        Validators.pattern(
          '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}'
        ),
      ]),
      calificacion: new FormControl(data.calificacion, [Validators.required]),
      fechaNacimiento: new FormControl(data.fechaNacimiento, [
        Validators.required,
      ]),
      becado: new FormControl(data.becado, []),
      id: new FormControl(data.id, []),
      foto: new FormControl(data.foto, [Validators.required]),
    };

    console.log('controles', controles.fechaNacimiento.value);

    this.formulario = new FormGroup(controles);
  }

  ngOnInit(): void {
    this.estudiantes$ = this.estudianteService.obtenerEstudiantesObservable();
  }
}
