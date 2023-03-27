import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEstudianteState from './estudiante-state.reducer';
import { EstudianteState } from './estudiante-state.reducer';

export const selectEstudianteState =
  createFeatureSelector<fromEstudianteState.EstudianteState>(
    fromEstudianteState.estudianteStateFeatureKey
  );

export const selectCargandoEstudiantes = createSelector(
  selectEstudianteState,
  (state: fromEstudianteState.EstudianteState) => state.cargando
);

export const selectorEstudiantesCargados = createSelector(
  selectEstudianteState,
  (state: fromEstudianteState.EstudianteState) => state.estudiantes
);
