import { TelefonePipe } from '../src/telefone.pipe';
describe('TelefonePipe', () => {
  
  let pipe = new TelefonePipe();
  it('transforms "3196098689" to "(31)9609-8689"', () => {
    expect(pipe.transform('3196098689')).toBe('(31)9609-8689');
  });

  it('transforms "31996098689" to "(31)99609-8689"', () => {
    expect(pipe.transform('31996098689')).toBe('(31)99609-8689');
  });
});