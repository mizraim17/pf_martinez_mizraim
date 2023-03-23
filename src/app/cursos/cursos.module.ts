import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarEstudianteComponent } from './components/agregar-estudiante/agregar-estudiante.component';
import { EditarEstudianteComponent } from './components/editar-estudiante/editar-estudiante.component';
import { ListaComponent } from './components/lista/lista.component';
import { TablaComponent } from './components/tabla/tabla.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConcatNombreApellidoPipe } from '../pipes/concat-nombre-apellido.pipe';
import { ValidaCalificacionPipe } from '../pipes/valida-calificacion.pipe';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosService } from './services/cursos.service';
import { SharedModule } from '../shared/shared.module';
import { FontSizeDirective } from '../directives/font-size.directive';

@NgModule({
  declarations: [
    AgregarEstudianteComponent,
    EditarEstudianteComponent,
    ListaComponent,
    TablaComponent,
    ConcatNombreApellidoPipe,
    ValidaCalificacionPipe,
    FontSizeDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CursosRoutingModule,
  ],
  exports: [
    AgregarEstudianteComponent,
    EditarEstudianteComponent,
    ListaComponent,
    TablaComponent,
    ConcatNombreApellidoPipe,
    ValidaCalificacionPipe,
  ],

  providers: [CursosService],
})
export class CursosModule {}
