import { ActionReducerMap } from '@ngrx/store';
import { EstudianteState } from '../../models/estudiante.state';
import { estudianteReducer } from './cursos.reducers';

export interface AppState {
  estudiantes: EstudianteState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  estudiantes: estudianteReducer,
};
