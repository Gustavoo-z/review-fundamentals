const estudante = {
    nome: 'Matheus',
    idade: 20,
    cpf: '123.456.789-10',
    turma: 'Javascript',
    bolsista: true,
    telefone: ['9999-9999', '8888-8888'],
    endereco: {
        rua: 'Rua João de Barros',
        numero: '105',
        complemento: 'apartamento 101'
    }
}

console.log(estudante.telefone[0]);
console.log(estudante.endereco);
console.log(estudante.endereco.rua);