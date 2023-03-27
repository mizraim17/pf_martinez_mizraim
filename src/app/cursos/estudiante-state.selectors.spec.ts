import * as fromEstudianteState from './estudiante-state.reducer';
import { selectEstudianteStateState } from './estudiante-state.selectors';

describe('EstudianteState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectEstudianteStateState({
      [fromEstudianteState.estudianteStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
