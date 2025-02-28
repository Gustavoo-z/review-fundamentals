const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 5.5, 9];

const reprovados = alunos.filter((_, index) => {
    return medias[index] < 7;
});

console.log(reprovados);