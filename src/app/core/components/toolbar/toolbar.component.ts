import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../../services/sesion.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  sesion$!: Observable<Sesion>;

  constructor(private router: Router, private sesion: SesionService) {}

  ngOnInit(): void {
    this.sesion$ = this.sesion.obtenerSesison();
  }

  irInicio() {
    this.router.navigate(['home']);
  }

  logOut() {
    let sesionLogout: Sesion = {
      sesionActiva: false,
      usuarioActivo: undefined,
    };

    this.sesion.logout(sesionLogout);
    this.router.navigate(['auth/login']);
  }
}
