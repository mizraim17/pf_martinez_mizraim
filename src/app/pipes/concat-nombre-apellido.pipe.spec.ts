import { ConcatNombreApellidoPipe } from './concat-nombre-apellido.pipe';

describe('ConcatNombreApellidoPipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatNombreApellidoPipe();
    expect(pipe).toBeTruthy();
  });
});
