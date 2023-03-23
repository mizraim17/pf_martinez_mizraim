import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Estudiante } from '../../../models/estudiante';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.scss'],
})
export class EditarEstudianteComponent implements OnInit {
  dataSource!: MatTableDataSource<Estudiante>;
  suscripcion!: Subscription;
  formulario: FormGroup;

  estudiantes$!: Observable<Estudiante[]>;

  constructor(
    private estudianteService: CursosService,
    @Inject(MAT_DIALOG_DATA) public data: Estudiante
  ) {
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
    this.formulario = new FormGroup(controles);
  }

  ngOnInit(): void {
    this.estudiantes$ = this.estudianteService.obtenerEstudiantesObservable();

    console.log('this.estudiantes$', this.estudiantes$);
  }

  ngOnDestroy(): void {
    // this.suscripcion.unsubscribe();
  }

  editEstudiante(estu: any) {
    console.log('name', this.formulario.value.nombre);

    let estudiante: Estudiante = {
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      curso: this.formulario.value.curso,
      correo: this.formulario.value.correo,
      calificacion: this.formulario.value.calificacion,
      fechaNacimiento: this.formulario.value.fechaNacimiento,
      becado: this.formulario.value.becado,
      id: this.formulario.value.id,
      foto: this.formulario.value.foto,
    };

    this.estudianteService
      .editarEstudiante(estudiante)
      .subscribe((estu: any) => {
        console.log('esttu->,', estu);
        // this.dialogRef.close(estu);
      });
  }
}
