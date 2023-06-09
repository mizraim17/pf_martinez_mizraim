import { createFeature, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { Sesion } from '../../models/sesion';

export const authFeatureKey = 'auth';

export interface AuthState {
  sesion: Sesion;
  componente: any;
}

//inicializando
export const initialState: AuthState = {
  sesion: {
    sesionActiva: false,
  },
  componente: 'test',
};

///funcion reductora ligada al action

export const authReducer = createReducer(
  initialState,
  on(AuthActions.cargarSesion, (state, { sesion }) => {
    if (!sesion.sesionActiva) return { ...state, sesion: state.sesion };
    else return { ...state, sesion: sesion };
  }),

  on(AuthActions.finalizarSesion, (state) => {
    return { ...state, sesion: { sesionActiva: false } };
  }),

  on(AuthActions.componenteActivo, (state) => {
    return { ...state, componente: '' };
  })
);
