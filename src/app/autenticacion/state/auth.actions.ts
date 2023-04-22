import { createAction, props } from '@ngrx/store';
import { Sesion } from '../../models/sesion';

export const cargarSesion = createAction(
  '[Auth]  Sesion Cargada',
  props<{ sesion: Sesion }>()
);

export const finalizarSesion = createAction('[Auth]  Finalizar sesion');

export const componenteActivo = createAction(
  '[Auth]  Componente Activo',
  props<{ componente: any }>()
);
