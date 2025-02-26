const notaFinal = 7;
const faltas = 5;
const advertencias = 0;

if(notaFinal >= 7 && faltas <= 4) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

if(notaFinal >= 7 || faltas <= 3) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

if(faltas >= 2 && !advertencias) {
    console.log('Bônus recebido');
} else {
    console.log('Bônus nao recebido');
}