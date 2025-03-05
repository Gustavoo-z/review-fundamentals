// Exercício 1 - Encontrar livro por id

const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]

function encontrarLivroPorId(lista, id) {
    return lista.find(livro => livro.id === id);
}

const livroEncontrado = encontrarLivroPorId(biblioteca, 2);
console.log(livroEncontrado);

// Exercício 2 - Encontrar livro por ano

function encontrarLivroPorAno(lista, ano) {
    return lista.find(livro => livro.anoPublicacao === ano);
}

const livroEncontradoPorAno = encontrarLivroPorAno(biblioteca, 1954);
console.log(livroEncontradoPorAno);

// Exercício 3 - Filtrar e ordenar produtos por preço

const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]

function filtraEOrdenaPorPreco(lista, preco) {
    return lista.filter(produto => produto.preco <= preco)
        .sort((a, b) => a.preco - b.preco);
}

const produtosFiltrados = filtraEOrdenaPorPreco(listaProdutos, 80);
console.log(produtosFiltrados);

// Exercício 4 - Ordenar animais 

const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]

function ordenarAnimais(comparacao) {
    return animais.sort(comparacao);
}

function compararIdadeCrescente(a, b) {
    return a.idade - b.idade;
}

function compararIdadeDecrescente(a, b) {
    return b.idade - a.idade;
}

const animaisOrdenadosCrescente = ordenarAnimais(compararIdadeDecrescente);
console.log(animaisOrdenadosCrescente);

// Exercício 5 - Encontrar funcionário por ID

const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
]

function encontrarFuncionarioPorId(departamentos, idFuncionario) {
    for (const departamento of departamentos) {
        const funcionario = departamento.funcionarios.find(func => func.id === idFuncionario);
        if (funcionario) {
            return funcionario;
        }
    }
    return "Funcionário não encontrado";
}

const funcionarioEncontrado = encontrarFuncionarioPorId(departamentos, 201);
console.log(funcionarioEncontrado);

const funcionarioEncontrado1 = encontrarFuncionarioPorId(departamentos, 203);
console.log(funcionarioEncontrado1);