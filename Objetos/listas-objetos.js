const estudante = {
    nome: 'Matheus',
    idade: 20,
    cpf: '123.456.789-10',
    turma: 'Javascript',
    bolsista: true,
    telefone: ['9999-9999', '8888-8888'],
    endereco: [{
        rua: 'Rua João de Barros',
        numero: '105',
        complemento: 'apartamento 101'
    }]
}

estudante.endereco.push({
    rua: 'Rua Nelson de Barros',
    numero: '101',
    complemento: ''
})

console.log(estudante.endereco);
console.log(estudante.endereco[1].rua);

const listaEnderecosComComplemento = estudante.endereco.filter(endereco => endereco.complemento);

console.log(listaEnderecosComComplemento);