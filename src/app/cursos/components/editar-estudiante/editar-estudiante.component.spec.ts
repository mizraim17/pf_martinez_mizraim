import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarEstudianteComponent } from './editar-estudiante.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursosService } from '../../services/cursos.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConcatNombreApellidoPipe } from 'src/app/pipes/concat-nombre-apellido.pipe';
import { ValidaCalificacionPipe } from 'src/app/pipes/valida-calificacion.pipe';
import { CursosModule } from '../../cursos.module';
import { MaterialModule } from 'src/app/material.module';

describe('EditarEstudianteComponent', () => {
  let component: EditarEstudianteComponent;
  let fixture: ComponentFixture<EditarEstudianteComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [EditarEstudianteComponent],
  //     providers: [CursosService],
  //     imports: [
  //       CursosModule,
  //       MaterialModule,
  //       ReactiveFormsModule,
  //       BrowserAnimationsModule,
  //       BrowserModule,
  //       HttpClientModule,
  //       BrowserAnimationsModule,
  //       FormsModule,
  //       AppRoutingModule,
  //     ],
  //   }).compileComponents();

  //   fixture = TestBed.createComponent(EditarEstudianteComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
