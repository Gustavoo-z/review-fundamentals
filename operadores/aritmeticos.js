const nota1 = 8;
const nota2 = 6.3;
const nota3 = 4;
const nota4 = 10;

const total = (nota1 + nota2 + nota3 + nota4) / 4;

if(total >= 7) {
    console.log(`A média é ${total.toFixed(2)} e você foi aprovado`);
} else {
    console.log(`A média é ${total.toFixed(2)} e você foi reprovado`);
}