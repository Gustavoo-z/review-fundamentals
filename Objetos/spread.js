const estudante = {
    nome: 'Matheus',
    idade: 20,
    cpf: '123.456.789-10',
    turma: 'Javascript',
    bolsista: true,
    telefones: ['9999-9999', '8888-8888'],
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

function exibirTelefones(...telefones) {
    console.log(telefones);
}

exibirTelefones(...estudante.telefones);

function exibirTelefones1(telefone1, telefone2) {
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
  }
  
  exibirTelefones1(estudante.telefones[0], estudante.telefones[1]);
  exibirTelefones1(...estudante.telefones);

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);