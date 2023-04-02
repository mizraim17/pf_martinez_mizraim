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

///funcion reductora ligada al action

export const authReducer = createReducer(
  initialState,
  on(AuthActions.cargarSesion, (state, { sesion }) => {
    console.log('sesion', sesion);

    return {
      ...state,
      sesionActiva: true,
      sesion,
    };
  })
);

// export const authFeature = createFeature({
//   name: authFeatureKey,
//   reducer,
// });
