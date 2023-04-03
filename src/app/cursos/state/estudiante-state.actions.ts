import { createAction, props } from '@ngrx/store';
import { Estudiante } from '../../models/estudiante';

export const cargarEstudianteState = createAction(
  '[EstudianteState] Cargar EstudianteStates'
);

export const estudianteCargado = createAction(
  '[EstudianteState] Estudiantes cargados',
  props<{ estudiantes: Estudiante[] }>()
);

export const agregarEstudianteState = createAction(
  '[EstudianteState] agregar Estudiante',
  props<{ estudiante: Estudiante }>()
);
export const editarEstudianteState = createAction(
  '[EstudianteState] editar Estudiante',
  props<{ estudiante: Estudiante }>()
);
export const eliminarEstudianteState = createAction(
  '[EstudianteState] eliminar Estudiante',
  props<{ i: string }>()
);
