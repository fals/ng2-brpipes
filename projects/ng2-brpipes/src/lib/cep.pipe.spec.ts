import { CepPipe } from './/cep.pipe';

describe('CepPipe', () => {

  const pipe = new CepPipe();
  it('transforms "72006226" to "72006-226"', () => {
    expect(pipe.transform('72006226')).toBe('72006-226');
  });

  it('transforms null to null', () => {
    expect(pipe.transform(null)).toBe(null);
  });

  it('transforms undefined to undefined', () => {
    expect(pipe.transform(undefined)).toBe(undefined);
  });

  it('transforms "" to ""', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('transforms "33154" to "33154"', () => {
    expect(pipe.transform('33154')).toBe('33154');
  });
});
