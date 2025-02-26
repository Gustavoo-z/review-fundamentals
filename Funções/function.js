const estudante = 'Matheus';

function exibirNomeEstudanteParam(estudante) {
    console.log(`O estudante se chama ${estudante}`);
}
exibirNomeEstudanteParam(estudante);

function exibirNomeEstudante() {
    console.log(`A estudante se chama Caroline`);    
}
exibirNomeEstudante();

const nome = 'Nelson'
function exibirNomeEstudanteReturn(nome) {
    return `O estudante se chama ${nome}`;    
}
console.log(exibirNomeEstudanteReturn(nome));