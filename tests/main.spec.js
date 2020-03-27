const { expect } = require('chai');
const { exec } = require('child_process');
const pkg = require('../package.json');

const btcConverter = './src/main.js';

describe('main CLI', () => {
  it('should return version of btc-converter', (done) => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });

  it('should return description when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.includes('Convert Bitcoin to any currency defined')).to.be.true;
      done();
    });
  });
});
