import { CurrenciesNamePipe } from './currencies-name.pipe';

describe('CurrenciesNamePipe', () => {
  it('create an instance', () => {
    const pipe = new CurrenciesNamePipe();
    expect(pipe).toBeTruthy();
  });
});
