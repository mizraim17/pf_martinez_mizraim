import { Estudiante } from './estudiante';
export interface EstudianteState {
  cargando: boolean;
  estudiantes: Estudiante[];
}
