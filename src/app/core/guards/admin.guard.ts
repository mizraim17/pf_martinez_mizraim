import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { SesionService } from '../services/sesion.service';
import { Sesion } from '../../models/sesion';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private sesion: SesionService,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.sesion.obtenerSesison().pipe(
      map((sesion: Sesion) => {
        console.log('es sesion.usuarioActivo', sesion.usuarioActivo);

        if (sesion.usuarioActivo?.esAdmin) {
          return true;
        } else {
          this.snackBar.open(`No tiene permiso como estudiante`, '', {
            duration: 3000,
            panelClass: ['blue-snackbar'],
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });

          this.router.navigate(['']);
          return false;
        }
      })
    );
  }
}
