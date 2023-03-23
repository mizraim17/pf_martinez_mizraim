import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { PaginaErrorComponent } from './core/components/pagina-error/pagina-error.component';
import { SesionGuard } from './core/guards/sesion.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SesionGuard],
  },

  {
    path: 'cursos',
    loadChildren: () =>
      import('./cursos/cursos.module').then((modulo) => modulo.CursosModule),
    canLoad: [SesionGuard],
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./autenticacion/autenticacion.module').then(
        (modulo) => modulo.AutenticacionModule
      ),
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PaginaErrorComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
