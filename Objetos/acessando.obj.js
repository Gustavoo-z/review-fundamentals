const estudante = {
    nome: 'Matheus',
    idade: 20,
    cpf: '123.456.789-10',
    turma: 'Javascript'
}

console.log(estudante.pet);
console.log(estudante['pet']);

console.log(estudante['nome']);
console.log(estudante['idade']);

function exibirInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(exibirInfoEstudante(estudante, 'nome'));
console.log(exibirInfoEstudante(estudante, 'idade'));