import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Estudiante } from 'src/app/models/estudiante';

import { env } from 'src/environment/environments';

@Injectable()
export class CursosService {
  private estudiante$!: BehaviorSubject<Estudiante[]>;

  constructor(private http: HttpClient) {}

  obtenerEstudiantesObservable(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${env.apiUrl}/estudiante`);
  }

  agregarEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    console.log('add stud', estudiante);

    return this.http.post<Estudiante>(`${env.apiUrl}/estudiante`, estudiante);
  }

  editarEstudiante(estudiante: any) {
    // console.log('estu id', arr.id);
    console.log('estu array', estudiante);

    return this.http.put<Estudiante>(
      `${env.apiUrl}/estudiante/${estudiante.id}`,
      estudiante
    );
  }

  eliminarEstudiante(id: string): Observable<Estudiante> {
    return this.http.delete<Estudiante>(`${env.apiUrl}/estudiante/${id}`);
  }

  filtrarEstudiante(word: string): void {}
}
