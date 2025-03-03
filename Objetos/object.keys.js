const estudante = {
    nome: 'Matheus',
    idade: 20,
    cpf: '123.456.789-10',
    turma: 'Javascript',
    bolsista: true,
    telefone: ['9999-9999', '8888-8888'],
    // enderecos: [{
    //     rua: 'Rua João de Barros',
    //     numero: '105',
    //     complemento: 'apartamento 101'
    // },
    // {
    //     rua: 'Rua Nelson de Barros',
    //     numero: '101',
    //     complemento: null
    // }]
}

const chaves = Object.keys(estudante);
console.log(chaves);

const chaves1 = Object.entries(estudante);
console.log(chaves1);

const chaves2 = Object.values(estudante);
console.log(chaves2);

if (!chaves.includes('enderecos')) {
    console.error('Chave enderecos nao encontrada');
}
if (!chaves1.includes('enderecos')) {
    console.error('Chave enderecos nao encontrada');
}
if (!chaves2.includes('enderecos')) {
    console.error('Chave enderecos nao encontrada');
}