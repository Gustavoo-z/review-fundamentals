const notas = [8, 6.3, 4, 10];

let somaDasNotas = 0;

// notas.forEach(function(nota) {
//     somaDasNotas += nota;
// })

notas.forEach(somaNotas);

function somaNotas(nota) {
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A media das notas é ${media}`);