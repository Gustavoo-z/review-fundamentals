const notas = [8, 6.3, 4, 10, 7];
notas.pop(7);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(notas);
console.log(media.toFixed(2));