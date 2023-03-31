import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from './autenticacion/state/auth.reducer';
import {
  selectSesionActiva,
  selectUsuarioActivo,
} from './autenticacion/state/auth.selectors';
import { Sesion } from './models/sesion';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '3pf_martinez_mizraim';
  sesionActiva$!: Observable<Boolean>;
  usuarioActivo$!: Observable<Usuario | undefined>;

  constructor(private router: Router, private authStore: Store<AuthState>) {}

  ngOnInit(): void {
    this.sesionActiva$ = this.authStore.select(selectSesionActiva);
    this.usuarioActivo$ = this.authStore.select(selectUsuarioActivo);
  }

  redigirInicio() {
    this.router.navigate(['inicio']);
  }

  logout() {
    let sesionLogout: Sesion = {
      sesionActiva: false,
      usuarioActivo: undefined,
    };

    // this.sesion.logout(sesionLogout);
    this.router.navigate(['auth/login']);
  }
}
