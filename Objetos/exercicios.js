// Exercício 1

// const pessoa = {
//     nome: 'Matheus',
//     notas: [8, 6.3, 4, 10],
//     media: function calcularMedia() {
//         const somaDasNotas = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
//         this.media = somaDasNotas / this.notas.length;
//         return this.media;
//     },
//     desempenho: function classificarDesempenho() {
//         if (this.media >= 9) {
//             return 'Desempenho excelente';
//         } else if (this.media >= 7.5 && this.media < 9) {
//             return 'Desempenho bom';
//         } else if (this.media >= 6 && this.media < 7.5) {
//             return 'Desempenho regular';
//         } else {
//             return 'Desempenho insuficiente';
//         }
//     }
// }

// console.log(pessoa.media());
// console.log(pessoa.desempenho());

// Exercício 2

// const carro = {
//     marca: 'Chevrolet',
//     modelo: 'Vectra GT',
//     ano: 2010,
//     cor: 'Preto'
// }

// for (let chave in carro) {
//     console.log(`${chave}: ${carro[chave]}`);
// }

// carro.rodas = '18"';
// carro.portas = 4;

// for (let chave in carro) {
//     if (chave === 'rodas' || chave === 'portas') {
//     console.log(`Opcionais: ${chave}: ${carro[chave]}`);
//     }
// }

// Exercício 3

// const carro1 = {
//     marca: 'Chevrolet',
//     modelo: 'Vectra GT',
//     ano: 2010,
//     cor: 'Preto',
//     ligado: true,
//     ligar: function ligar() {
//         if (!this.ligado) {
//             this.ligado = true;
//             console.log('Ligando o carro...');
//           } else {
//             console.log('O carro já está ligado.');
//           }
//     },
//     desligar: function desligar() {
//         if (this.ligado) {
//             this.ligado = false;
//             console.log('Desligando o carro...');
//           } else {
//             console.log('O carro já está desligado.');
//           }
//     },
//     obterDetalhes: function obterDetalhes() {
//         console.log(`Marca: ${this.marca}`);
//         console.log(`Modelo: ${this.modelo}`);
//         console.log(`Ano: ${this.ano}`);
//         console.log(`Cor: ${this.cor}`);
//         const estado = this.ligado ? 'ligado' : 'desligado';
//     return `Detalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
//   }
// }

// carro1.ligar();
// carro1.desligar();
// carro1.desligar();
// carro1.ligar();
// console.log(carro1.obterDetalhes());

// Exercício 4

// const carro2 = {
//     marca: 'Chevrolet',
//     modelo: 'Vectra GT',
//     ano: 2010,
//     cor: 'Preto',
//     placa: 'MGT-4B79'
// }

// Object.defineProperty(carro2, 'placa', {
//     enumerable: false
// });

// for (let chave in carro2) {
//     console.log(`${chave}: ${carro2[chave]}`);
// }

// Exercício 5

// const carro = {
//     marca: 'Chevrolet',
//     modelo: 'Vectra GT',
//     ano: 2010,
//     cor: 'Preto'
// }

// const carroNovo = {
//     marca: 'Fiat',
//     modelo: 'Palio',
//     ano: 2013,
//     cor: 'Branco'
// }

// const carroComNovosDetalhes = {
//     ...carro,
//     ...carroNovo,
//     ano: 2014
// }

// console.log(carro);
// console.log(carroNovo);
// console.log(carroComNovosDetalhes);