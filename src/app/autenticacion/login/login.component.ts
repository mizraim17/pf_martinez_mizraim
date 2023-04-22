import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from '../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../state/auth.reducer';
import { Sesion } from 'src/app/models/sesion';
import { cargarSesion } from '../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;
  suscripcion!: Subscription;

  constructor(
    private loginService: LoginService,
    private router: Router,
    public snackBar: MatSnackBar,
    private authStore: Store<AuthState>
  ) {
    let controles: any = {
      usuario: new FormControl('miz@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      contrasena: new FormControl('usuario123', [
        Validators.required,
        Validators.minLength(5),
      ]),
      esAdmin: new FormControl('true', [Validators.required]),
    };

    this.formulario = new FormGroup(controles);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  login() {
    let usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      esAdmin: this.formulario.value.esAdmin,
    };

    this.suscripcion = this.loginService
      .login(usuario)
      .subscribe((sesion: Sesion) => {
        this.authStore.dispatch(
          cargarSesion({
            sesion: sesion,
          })
        );
        this.router.navigate(['home']);
      });
  }
}
