import { createReducer, on } from '@ngrx/store';
import { EstudianteState } from '../../models/estudiante.state';

import { cargarEstudiantes, estudiantesCargados } from './cursos.actions';

const estadoInicial: EstudianteState = {
  cargando: false,
  estudiantes: [],
};

export const estudianteReducer = createReducer(
  estadoInicial,
  on(cargarEstudiantes, (state) => {
    const nuevoEstado: EstudianteState = {
      cargando: true,
      estudiantes: state.estudiantes,
    };
    return nuevoEstado;
  }),
  on(estudiantesCargados, (state, { estudiantes }) => {
    const nuevoEstado: EstudianteState = {
      cargando: false,
      estudiantes: estudiantes,
    };
    return nuevoEstado;
  })
);
