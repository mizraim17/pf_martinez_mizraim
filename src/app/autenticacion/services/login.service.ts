import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { SesionService } from '../../core/services/sesion.service';
import { Sesion } from '../../models/sesion';
import { map, Observable } from 'rxjs';
import { env } from 'src/environment/environments';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private sesion: SesionService,
    private http: HttpClient,
    public snackBar: MatSnackBar
  ) {}

  login(usuario: Usuario): Observable<Sesion> {
    return this.http.get<Usuario[]>(`${env.authURL}/usuarios`).pipe(
      map((usuarios: Usuario[]) => {
        let usuarioValidado = usuarios.find(
          (u: Usuario) =>
            u.usuario === usuario.usuario && u.contrasena === usuario.contrasena
        );

        if (usuarioValidado) {
          const sesion: Sesion = {
            sesionActiva: true,
            usuarioActivo: usuarioValidado,
          };

          let tipo_usuario = sesion.usuarioActivo?.esAdmin;

          this.snackBar.open(
            `Bienvenido  ${tipo_usuario ? 'Administrador' : 'Alumno'}`,
            '',
            {
              duration: 4000,
              panelClass: ['blue-snackbar'],
              horizontalPosition: 'center',
              verticalPosition: 'top',
            }
          );

          return sesion;
        } else {
          const sesion: Sesion = {
            sesionActiva: false,
          };

          let tipo_usuario = sesion.usuarioActivo?.esAdmin;

          this.snackBar.open(
            `Bienvenido  ${tipo_usuario ? 'Administrador' : 'Alumno'}`,
            '',
            {
              duration: 4000,
              panelClass: ['blue-snackbar'],
              horizontalPosition: 'center',
              verticalPosition: 'top',
            }
          );

          return sesion;
        }
      })
    );
  }
}
