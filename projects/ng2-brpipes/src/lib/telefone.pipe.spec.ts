import { TelefonePipe } from './/telefone.pipe';
describe('TelefonePipe', () => {

  const pipe = new TelefonePipe();
  it('transforms "3196098689" to "(31)9609-8689"', () => {
    expect(pipe.transform('3196098689')).toBe('(31)9609-8689');
  });

  it('transforms "31996098689" to "(31)99609-8689"', () => {
    expect(pipe.transform('31996098689')).toBe('(31)99609-8689');
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

  it('transforms "          " to ""', () => {
    expect(pipe.transform('          ')).toBe('');
  });

  it('transforms "           " to ""', () => {
    expect(pipe.transform('          ')).toBe('');
  });
});
