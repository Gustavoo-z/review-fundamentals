// Exercício 1

const pessoa = {
    nome: 'Matheus',
    notas: [8, 6.3, 4, 10],
    media: function calcularMedia() {
        const somaDasNotas = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
        this.media = somaDasNotas / this.notas.length;
        return this.media;
    },
    desempenho: function classificarDesempenho() {
        if (this.media >= 9) {
            return 'Desempenho excelente';
        } else if (this.media >= 7.5 && this.media < 9) {
            return 'Desempenho bom';
        } else if (this.media >= 6 && this.media < 7.5) {
            return 'Desempenho regular';
        } else {
            return 'Desempenho insuficiente';
        }
    }
}

console.log(pessoa.media());
console.log(pessoa.desempenho());

// Exercício 2

const carro = {
    marca: 'Chevrolet',
    modelo: 'Vectra GT',
    ano: 2010,
    cor: 'Preto'
}

for (let chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}

carro.rodas = '18"';
carro.portas = 4;

for (let chave in carro) {
    if (chave === 'rodas' || chave === 'portas') {
    console.log(`Opcionais: ${chave}: ${carro[chave]}`);
    }
}

// Exercício 3

