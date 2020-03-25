// Desafio FizzBuzz

// Escreva uma lib que receba um número e:

// Se o número for divisível por 3, no lugar do número escreva 'Fizz' - X
// Se o número for divisível por 5, no lugar do número escreva 'Buzz' - X
// Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz' -X
// Se não for múltiplo de NamedNodeMap, retorna o número

import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('Main', () => {
  it('should return `Fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).of.be.equal('Buzz');
    expect(FizzBuzz(25)).of.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('should return the number when not multiple', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });

  it('should return 0 if number is 0', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});
