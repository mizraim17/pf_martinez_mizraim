import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaEstudiantesComponent } from './carga-estudiantes.component';

describe('CargaEstudiantesComponent', () => {
  let component: CargaEstudiantesComponent;
  let fixture: ComponentFixture<CargaEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaEstudiantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargaEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
