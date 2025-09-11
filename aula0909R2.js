// VETOR

// Criando um VETOR de nomes vazio
let nomes = []

// Inserir um nome no VETOR
nomes.push("Roger divo")

// Mostrar o nome inserido no VETOR
console.log(nomes[0]) // Buscando a posição 0, pois só tem uma variável no meu VETOR

// Criando um VETOR já preenchido
let albuns = ["DIL", "BDay", "Iasf", "4", "BEYONCE", "Lemonade", "RENAISSANCE", "COWBOY CARTER"]
let meuAlbum = "VGhjhb" // Exemplo de verificação

let existe = false

// Estrutura de repetição FOR para checar se o jogo já existe no meu VETOR
for (let i = 0; i < albuns.length; i++) {
    if (albuns[i] == meuAlbum) {
        existe = true
        break
    }
}

if (existe) {
    console.log("Jogo já existente na lista!")
} else {
    albuns.push(meuAlbum)
}
console.log(albuns)

// Remover item do meu VETOR
albuns.splice(2, 1)
console.log(albuns)
