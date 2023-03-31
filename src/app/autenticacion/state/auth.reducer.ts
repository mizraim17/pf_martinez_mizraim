import { createFeature, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { Sesion } from '../../models/sesion';

export const authFeatureKey = 'auth';

export interface AuthState {
  sesion: Sesion;
}

//inicializando
export const initialState: AuthState = {
  sesion: {
    sesionActiva: false,
  },
};

///funcion reductora

export const authReducer = createReducer(
  initialState,
  on(AuthActions.cargarSesion, (state, { sesion }) => {
    return {
      ...state,
      sesion: {
        sesionActiva: true,
        usuarioActivo: sesion.usuarioActivo,
      },
    };
  })
);

// export const authFeature = createFeature({
//   name: authFeatureKey,
//   reducer,
// });
