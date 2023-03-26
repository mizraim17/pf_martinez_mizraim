import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { EstudianteState } from '../../models/estudiante.state';

export const selectorEstudiante = (state: AppState) => {
  return state.estudiantes;
};

export const selectorCargandoEstudiantes = createSelector(
  selectorEstudiante,

  (state: EstudianteState) => {
    return state.cargando;
  }
);

export const selectorEstudiantesCargados = createSelector(
  selectorEstudiante,
  (state: EstudianteState) => {
    return state.estudiantes;
  }
);
