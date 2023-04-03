import { createFeature, createReducer, on } from '@ngrx/store';
import { Estudiante } from '../../models/estudiante';
import * as EstudianteStateActions from './estudiante-state.actions';
import {
  estudianteCargado,
  agregarEstudianteState,
  editarEstudianteState,
} from './estudiante-state.actions';

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
  }),

  on(
    EstudianteStateActions.agregarEstudianteState,
    (state, { estudiante: Estudiante }) => {
      return state;
    }
  ),
  on(
    EstudianteStateActions.editarEstudianteState,
    (state, { estudiante: any }) => {
      return state;
    }
  ),

  on(EstudianteStateActions.eliminarEstudianteState, (state, { i: String }) => {
    return state;
  })
);
