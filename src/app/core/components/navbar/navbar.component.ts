import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/autenticacion/state/auth.reducer';
import {
  selectSesionActiva,
  selectUsuarioActivo,
} from 'src/app/autenticacion/state/auth.selectors';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  sesionActiva$!: Observable<Boolean> | undefined;
  usuarioActivo$!: Observable<Usuario | undefined>;

  constructor(private router: Router, private authStore: Store<AuthState>) {}

  ngOnInit() {
    this.sesionActiva$ = this.authStore.select(selectSesionActiva);

 
    this.usuarioActivo$ = this.authStore.select(selectUsuarioActivo);
  }

  irInicio() {
    this.router.navigate(['home']);
  }
}
