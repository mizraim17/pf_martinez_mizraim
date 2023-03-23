import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { EditarEstudianteComponent } from './components/editar-estudiante/editar-estudiante.component';
import { AgregarEstudianteComponent } from './components/agregar-estudiante/agregar-estudiante.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { SesionGuard } from '../core/guards/sesion.guard';
import { AdminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [SesionGuard],
    children: [
      { path: 'list', component: ListaComponent },
      {
        path: 'edit',
        component: EditarEstudianteComponent,
        // canActivate: [AdminGuard],
      },

      {
        path: 'add',
        component: AgregarEstudianteComponent,
        // canActivate: [AdminGuard],
      },
      { path: 'table', component: TablaComponent, canActivate: [AdminGuard] },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
