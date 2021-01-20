import { PorcentagemPipe } from './porcentagem.pipe';

describe('PorcentagemPipe', () => {
  it('create an instance', () => {
    const pipe = new PorcentagemPipe();
    expect(pipe.transform(20)).toBe(30);
  });
});
