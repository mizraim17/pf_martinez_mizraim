import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Estudiante } from 'src/app/models/estudiante';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-carga-estudiantes',
  templateUrl: './carga-estudiantes.component.html',
  styleUrls: ['./carga-estudiantes.component.scss'],
})
export class CargaEstudiantesComponent {
  constructor(private estudianteService: CursosService) {}

  ngOnInit() {}
}
