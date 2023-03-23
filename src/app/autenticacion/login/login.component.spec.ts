import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MaterialModule } from '../../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [MaterialModule, ReactiveFormsModule, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe existir', () => {
    expect(component).toBeTruthy();
  });

  it('Login debe tener usuario, contraseña, tipo usuario ', () => {
    const formulario = component.formulario;

    const usuario = formulario.controls['usuario'];
    const contrasena = formulario.controls['contrasena'];
    const admin = formulario.controls['esAdmin'];

    usuario.setValue('Mizraim');
    contrasena.setValue('nada');
    admin.setValue(true);

    expect(formulario.valid).toBeTrue();
  });

  it('Login debe ser invalido si solo se llena uno ', () => {
    const formulario = component.formulario;
    const usuario = formulario.controls['usuario'];

    usuario.setValue('Mizraim');

    expect(formulario.invalid).toBeTrue();
  });
});
