const estudante = {
    nome: 'Matheus',
    idade: 20,
    cpf: '123.456.789-10',
    turma: 'Javascript',
    bolsista: true,
    telefones: ['9999-9999', '8888-8888'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false
    } 
}

// Arrow function não lida corretamente com o this
// estudante.estaAprovado = (mediaBase) => this.media >= mediaBase ? true : false

console.log(estudante.estaAprovado(7));