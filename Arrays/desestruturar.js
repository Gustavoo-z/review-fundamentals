const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibirNomeENota(aluno) {
    if (lista[0].includes(aluno)) {
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno);
        const media = medias[indice];
        console.log(`${aluno} tirou a nota ${media}`);
    } else {
        console.log('Aluno nao encontrado');
    }
}

exibirNomeENota('Caio');
exibirNomeENota('Jackson');