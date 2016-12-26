import { CpfPipe } from '../src/cpf.pipe';

describe('CpfPipe', () => {
  
  let pipe = new CpfPipe();
  it('transforms "01964256119" to "019.642.561-19"', () => {
    expect(pipe.transform('01964256119')).toBe('019.642.561-19');
  });
});