const estudantes = require('./estudantes.json');

function buscaInformacao(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor)); 
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet');
console.log(estudanteEncontrado);

const estudanteEncontrado1 = buscaInformacao(estudantes, 'nome', 'Nãoexiste');
console.log(estudanteEncontrado1);

const telefoneEstudante = buscaInformacao(estudantes, 'telefone', '47933865848');
console.log(telefoneEstudante);