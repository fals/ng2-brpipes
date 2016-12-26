import { CnpjPipe } from '../src/cnpj.pipe';
describe('CnpjPipe', () => {
  
  let pipe = new CnpjPipe();
  it('transforms "43146822000198" to "43.146.822/0001-98"', () => {
    expect(pipe.transform('43146822000198')).toBe('43.146.822/0001-98');
  });
});