import { CepPipe } from '../src/cep.pipe';

describe('CepPipe', () => {
  
  let pipe = new CepPipe();
  it('transforms "72006226" to "72006-226"', () => {
    expect(pipe.transform('72006226')).toBe('72006-226');
  });
});