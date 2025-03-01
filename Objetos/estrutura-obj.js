const estudante = {
    nome: 'Matheus',
    idade: 20,
    cpf: '123.456.789-10',
    turma: 'Javascript'
}

console.log(`O nome do estudante é ${estudante.nome}`);
console.log(`O estudante tem ${estudante.idade} anos`);
console.log(`Os três primeiros números do CPF do estudante é ${estudante.cpf.substring(0, 3)}`);
console.log(`O estudante cursa na turma de ${estudante.turma}`);