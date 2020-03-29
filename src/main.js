#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');
const convertBTC = require('./ConvertBTC');

program
  .version(pkg.version)
  .description('Convert Bitcoin to any currency defined')
  .option('-C, --currency <currency>', 'Currency to be converted. (Defaulted: USD)')
  .option('-A, --amount <amount>', 'Value bitcoin to be convert. (Defaulted: 1)')
  .parse(process.argv);


console.log(convertBTC(program.currency, program.amount));
