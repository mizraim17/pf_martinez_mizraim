import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../../services/sesion.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AuthState } from 'src/app/autenticacion/state/auth.reducer';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';
import {
  selectSesionActiva,
  selectUsuarioActivo,
} from 'src/app/autenticacion/state/auth.selectors';
import {
  cargarSesion,
  finalizarSesion,
} from 'src/app/autenticacion/state/auth.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  sesionActiva$!: Observable<Boolean> | undefined;
  usuarioActivo$!: Observable<Usuario | undefined>;

  constructor(private router: Router, private authStore: Store<AuthState>) {}

  ngOnInit(): void {
    this.sesionActiva$ = this.authStore.select(selectSesionActiva);
    this.usuarioActivo$ = this.authStore.select(selectUsuarioActivo);
  }

  irInicio() {
    this.router.navigate(['home']);
  }

  logOut() {
    this.authStore.dispatch(finalizarSesion());

    this.router.navigate(['auth/login']);
  }
}
