import { RealPipe } from './/real.pipe';

describe('RealPipe', () => {

  const pipe = new RealPipe();

  it('transforms null to ""', () => {
    expect(pipe.transform(null)).toBe('');
  });

  it('transforms undefined to ""', () => {
    expect(pipe.transform(undefined)).toBe('');
  });

  it('transforms "" to ""', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('transforms "999999.00" to "R$999.999,00"', () => {
    expect(pipe.transform(999999.00)).toBe('R$999.999,00');
  });

  it('transforms "9999.00" to "R$9.999,00"', () => {
    expect(pipe.transform(9999.00)).toBe('R$9.999,00');
  });

  it('transforms "0.55" to "R$0,55"', () => {
    expect(pipe.transform(0.55)).toBe('R$0,55');
  });

  it('transforms "1.55" to "R$1,55"', () => {
    expect(pipe.transform(1.55)).toBe('R$1,55');
  });

  it('transforms "1.00" to "R$1,00"', () => {
    expect(pipe.transform(1.00)).toBe('R$1,00');
  });

  it('transforms "0.00" to "R$0,00"', () => {
    expect(pipe.transform(0.00)).toBe('R$0,00');
  });

  it('transforms "not a number" to "not a number"', () => {
    expect(pipe.transform('not a number')).toBe('not a number');
  });
});
