import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { LoginComponent } from './login/login.component';
import { AutenticacionInicioComponent } from './autenticacion-inicio/autenticacion-inicio.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { authFeatureKey, authReducer } from './state/auth.reducer';

@NgModule({
  declarations: [LoginComponent, AutenticacionInicioComponent],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    SharedModule,
    StoreModule.forFeature(authFeatureKey, authReducer),
  ],
})
export class AutenticacionModule {}
