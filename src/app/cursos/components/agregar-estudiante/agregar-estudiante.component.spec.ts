import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEstudianteComponent } from './agregar-estudiante.component';
import { MaterialModule } from '../../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursosService } from '../../services/cursos.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ConcatNombreApellidoPipe } from 'src/app/pipes/concat-nombre-apellido.pipe';
import { ValidaCalificacionPipe } from 'src/app/pipes/valida-calificacion.pipe';
import { CursosModule } from '../../cursos.module';

describe('AgregarEstudianteComponent', () => {
  let component: AgregarEstudianteComponent;
  let fixture: ComponentFixture<AgregarEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEstudianteComponent],
      providers: [CursosService],
      imports: [
        CursosModule,
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se creo componente', () => {
    expect(component).toBeTruthy();
  });

  it('Formulario deben llenarse los campos requeridos', () => {
    const formulario = component.formulario;
    const correo = formulario.controls['correo'];
    const nombre = formulario.controls['nombre'];
    const apellido = formulario.controls['apellido'];
    const foto = formulario.controls['foto'];
    const fechaNacimiento = formulario.controls['fechaNacimiento'];
    const calificacion = formulario.controls['calificacion'];
    const curso = formulario.controls['curso'];

    nombre.setValue('Mizraim');
    apellido.setValue('martinez');
    curso.setValue('React');
    foto.setValue('https://rickandmortyapi.com/api/character/avatar/151.jpeg');
    correo.setValue('miz@gmail.com');
    fechaNacimiento.setValue('12091983');
    calificacion.setValue('2111');

    expect(formulario.valid).toBeTrue();
  });
});
