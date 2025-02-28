const notas = [8, 6.3, 4, 10];

let somaDasNotas = 0;

for (let nota of notas) {
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(media.toFixed(2));