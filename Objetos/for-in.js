const estudante = {
    nome: 'Matheus',
    idade: 20,
    cpf: '123.456.789-10',
    turma: 'Javascript',
    bolsista: true,
    telefone: ['9999-9999', '8888-8888'],
    enderecos: [{
        rua: 'Rua João de Barros',
        numero: '105',
        complemento: 'apartamento 101'
    },
    {
        rua: 'Rua Nelson de Barros',
        numero: '101',
        complemento: null
    }]
}

for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} tem o valor ${estudante[chave]}`);
    }
}