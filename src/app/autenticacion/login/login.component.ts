import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from '../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    public snackBar: MatSnackBar
  ) {
    let controles: any = {
      usuario: new FormControl('miz@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      contrasena: new FormControl('gatos123', [
        Validators.required,
        Validators.minLength(5),
      ]),
      esAdmin: new FormControl('true', [Validators.required]),
    };

    this.formulario = new FormGroup(controles);
  }

  ngOnInit(): void {}

  login() {
    let tipo_usuario = this.formulario.controls['esAdmin'].value;

    console.log('-->', tipo_usuario);

    this.snackBar.open(
      `Bienvenido  ${tipo_usuario ? 'Administrador' : 'Alumno'}`,
      '',
      {
        duration: 3000,
        panelClass: ['blue-snackbar'],
        horizontalPosition: 'center',
        verticalPosition: 'top',
      }
    );

    let usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      esAdmin: this.formulario.value.esAdmin,
    };
    this.loginService.login(usuario);
    this.router.navigate(['/cursos/list']);
  }
}
