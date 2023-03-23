import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { CursosModule } from '../cursos.module';

import { CursosService } from './cursos.service';

describe('CursosService', () => {
  let service: CursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CursosModule, BrowserModule, HttpClientModule],
    });
    service = TestBed.inject(CursosService);
  });

  it('should be created', () => {
    // expect(service).toBeTruthy();
  });
});
