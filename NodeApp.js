const matematica = require('./moduleExport')

const resultSoma = matematica.soma(5, 3);
const resultSubtracao = matematica.subtracao(10, 4);
const resultMultiplicacao = matematica.multiplicacao(10, 10);
const resultSomar = matematica.somar(10, 10);

console.log(`Result SOMA: ${resultSoma}`);
console.log(`Result SUB: ${resultSubtracao}`);
console.log(`Result MULT: ${resultMultiplicacao}`);
console.log(`Result SUM: ${resultSomar}`);