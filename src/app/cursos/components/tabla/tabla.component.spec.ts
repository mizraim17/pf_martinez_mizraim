import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaComponent } from './tabla.component';
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

describe('TablaComponent', () => {
  let component: TablaComponent;
  let fixture: ComponentFixture<TablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TablaComponent,
        ConcatNombreApellidoPipe,
        ValidaCalificacionPipe,
      ],
      providers: [MatDialog, CursosService],
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

    fixture = TestBed.createComponent(TablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
