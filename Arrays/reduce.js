const salaJS = [7, 8, 9, 10, 6.5, 4, 9];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calcularMedia(listaDeNotas) {
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);
    
    const media = somaDasNotas / listaDeNotas.length;
    return media;
}

console.log(calcularMedia(salaJS));
console.log(calcularMedia(salaJava));
console.log(calcularMedia(salaPython));