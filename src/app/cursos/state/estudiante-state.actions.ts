import { createAction, props } from '@ngrx/store';
import { Estudiante } from '../../models/estudiante';

export const cargarEstudianteState = createAction(
  '[EstudianteState] Cargar EstudianteStates'
);

export const estudianteCargado = createAction(
  '[EstudianteState] Estudiantes cargados',
  props<{ estudiantes: Estudiante[] }>()
);
