const prompt = require('prompt-sync')()

// Array para armazenar os álbuns
let albuns = []

// Laço de repetição
while (true) {
    console.log("1 - Colocar um álbum.")
    console.log("2 - Tirar um álbum.")
    console.log("3 - Ver lista de álbuns.")
    console.log("4 - Editar um álbum.")
    console.log("5 - Sair.")

    const opcao =  parseInt(prompt("Escolha uma opção: "))

    if (opcao == 1) {
        const novoAlbum = prompt("Digite o nome do novo álbum: ")

        if (albuns.includes(novoAlbum)) {
            console.log("Este álbum já existe!") // Includes vai checar se existe uma posição com esse álbum e dizer.
        } else {
            albuns.push(novoAlbum) // Push vai incluir o álbum
            console.log(`Álbum "${novoAlbum}" colocado na lista!`)
        }
    } else if (opcao == 2) {
        const albumExcluir = prompt("Digite o nome do álbum que deseja excluir: ")

        const posicao = albuns.indexOf(albumExcluir) // IndexOf vai puxar a posição do álbum.

        if (posicao > -1) {
            albuns.splice(posicao, 1)
            console.log(`Álbum "${albumExcluir}" excluído com sucesso!`) // Se a posição for neutra ou positiva, o álbum vai ser excluído.
        } else {
            console.log("Álbum não encontrado na lista.") // Se a posição for negativa, é porque o álbum não existe na lista.
        }
    }  else if (opcao == 3) {
        console.log(albuns) // Vai exibir a lista de álbuns.
    }  else if (opcao == 4) {
        const albumEditar = prompt("Digite o nome do álbum que deseja editar: ")

        const posicao = albuns.indexOf(albumEditar) // Checar a posição.

        if (posicao > -1) {
            const albumEditado = prompt(`Digite o novo nome para "${albumEditar}": `)

            if (albuns.includes(albumEditado) && albuns[posicao] !== albumEditado) {
                console.log("Este novo nome de álbum já existe na lista!") // Verifica se o novo nome já existe.
            } else {
                albuns[posicao] = albumEditado

                console.log(`Álbum "${albumEditar}" editado para "${albumEditado}" com sucesso!`)
            }
        } else {
            console.log("Álbum não encontrado na lista.")
        }
    }  else if (opcao == 5) {
        console.log("Saindo do sistema. Até mais!")
        break // Quebra o loop.
    } else {
        console.log("Opção inválida. Por favor, escolha um número de 1 a 5.")
    }
}