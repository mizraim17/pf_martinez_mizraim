import { createFeature, createReducer, on } from '@ngrx/store';
import { Estudiante } from '../../models/estudiante';
import * as EstudianteStateActions from './estudiante-state.actions';
import { estudianteCargado } from './estudiante-state.actions';

export const estudianteStateFeatureKey = 'estudianteState';

export interface EstudianteState {
  cargando: boolean;
  estudiantes: Estudiante[];
}

export const initialState: EstudianteState = {
  cargando: false,
  estudiantes: [],
};

export const reducer = createReducer(
  initialState,
  on(EstudianteStateActions.cargarEstudianteState, (state) => {
    return { ...state, cargando: true };
  }),

  on(EstudianteStateActions.estudianteCargado, (state, { estudiantes }) => {
    return { ...state, cargando: false, estudiantes };
  })
);

export const estudianteStateFeature = createFeature({
  name: estudianteStateFeatureKey,
  reducer,
});
