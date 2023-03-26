import { createAction, props } from '@ngrx/store';
import { Estudiante } from '../../models/estudiante';

export const cargarEstudiantes = createAction(
  '[Lista Estudiantes] Cargar estudiantes'
);

export const estudiantesCargados = createAction(
  '[Lista Estudiantes]Estudiantes Cargados]',
  props<{ estudiantes: Estudiante[] }>()
);
