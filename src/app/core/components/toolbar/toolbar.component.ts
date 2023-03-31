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

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  // sesion$!: Observable<Sesion>;

  sesionActiva$!: Observable<Boolean>;
  usuarioActivo$!: Observable<Usuario | undefined>;

  constructor(
    // private router: Router, private sesion: SesionService

    private router: Router,
    private authStore: Store<AuthState>
  ) {}

  ngOnInit(): void {
    // this.sesion$ = this.sesion.obtenerSesison();

    this.sesionActiva$ = this.authStore.select(selectSesionActiva);
    alert('toolbar');
    console.log(' this.sesionActiva$', this.sesionActiva$);

    this.usuarioActivo$ = this.authStore.select(selectUsuarioActivo);
  }

  irInicio() {
    this.router.navigate(['home']);
  }

  logOut() {
    let sesionLogout: Sesion = {
      sesionActiva: false,
      usuarioActivo: undefined,
    };

    // this.sesion.logout(sesionLogout);
    this.router.navigate(['auth/login']);
  }
}
