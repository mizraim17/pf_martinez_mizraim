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
import { AuthState } from 'src/app/autenticacion/state/auth.reducer';
import { Store } from '@ngrx/store';
import { selectSesionState } from 'src/app/autenticacion/state/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private authStore: Store<AuthState>,
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
    return this.authStore.select(selectSesionState).pipe(
      map((sesion: Sesion) => {
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
