//Exercício 1

// const dados = require('./exercicios-json.json');

// console.log(dados);

// const produtos = dados.produtos;
// const usuarios = dados.usuarios;

// console.log(produtos);
// console.log(usuarios);

// console.log(produtos[0]);
// console.log(usuarios[0]);

// console.log(produtos[0].nome);
// console.log(usuarios[0].email);

//Exercício 2

// const stringDados = JSON.stringify(dados);
// console.log(stringDados);

// const objDados = JSON.parse(stringDados);
// console.log(objDados);

//Exercício 3

// const animais = require('./exercicios-animais.json');

// const animaisJson = JSON.parse(JSON.stringify(animais));
// console.log(animaisJson);

// const novoAnimal = {
//     id: 4,
//     nome: 'Tartaruga',
//     tipo: 'Reptil',
//     habitat: 'Floresta Tropical'
// }

// animaisJson.animais.push(novoAnimal);
// console.log(animaisJson);

// const novoHabitat = 'Marinho';
// animaisJson.animais[3].habitat = novoHabitat;
// console.log(animaisJson);

// animaisJson.animais.pop(animaisJson.animais[3]);
// console.log(animaisJson);

// const animaisString = JSON.stringify(animaisJson);
// console.log(animaisString);

//Exercício 4

// const pessoaOriginal = {
//     id: 1,
//     nome: "Alice",
//     idade: 30
// }

// const copiaPessoa = {
//     ...pessoaOriginal,
//     nome: 'Nelson'
// }

// console.log(copiaPessoa);
// console.log(pessoaOriginal);
