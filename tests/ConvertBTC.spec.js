const nock = require('nock');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');


const { expect } = chai;
chai.use(sinonChai);

const convertBTC = require('../src/ConvertBTC');
const API_URL = require('../src/config');

const responseMock = '0.00016873';

let consoleStub;

beforeEach(() => {
  consoleStub = sinon.stub(console, 'log');
});

afterEach(() => {
  console.log.restore();
});

describe('ConvertBTC', () => {
  it('should use currency USD and 1 as amount default', (done) => {
    nock(`${API_URL}`)
      .get('/tobtc')
      .query({ currency: 'USD', value: 1 })
      .reply(200, responseMock);

    convertBTC();

    setTimeout(() => {
      expect(consoleStub).to.have.calledWith(`1 BTC to USD = ${responseMock}`);
      done();
    }, 800);
  });

  it('should use currency USD and 10 as amount', (done) => {
    nock(`${API_URL}`)
      .get('/tobtc')
      .query({ currency: 'USD', value: 10 })
      .reply(200, responseMock);

    convertBTC('USD', 10);

    setTimeout(() => {
      expect(consoleStub).to.have.calledWith(`10 BTC to USD = ${responseMock}`);
      done();
    }, 800);
  });

  // it('should do return BRL as currency and 10 as amount default...', () => {
  //   expect(convertBTC('BRL', 10)).to.be.equal('10 BTC to BRL = 2000.00');
  // });

  // it('should use currency BRL and 10 as amount default', (done) => {
  //   nock(`${API_URL}`)
  //     .get('/tobtc')
  //     .query({ currency: 'BRL', value: 10 })
  //     .reply(200, responseMock);

  //   convertBTC();

  //   setTimeout(() => {
  //     expect(consoleStub).to.have.calledWith('10 BTC to BRL = 0.00033172');
  //     done();
  //   }, 300);
  // });
});
