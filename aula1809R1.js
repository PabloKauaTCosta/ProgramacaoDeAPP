const prompt = require('prompt-sync')()

let quarto = []
let nome = []
let contato = []

for(let i = 0; i < 3; i++) {
    const quartoReserva = parseInt(prompt("Escolha um quarto: "))

    if (quarto.includes(quartoReserva)) {
        console.log("Este quarto está ocupado")
        i--
    } else {
        quarto.push(quartoReserva)
        
        const seuNome = prompt("Digite seu nome: ")
        nome.push(seuNome)
        
        const seuContato = prompt("Digite seu e-mail: ")
        contato.push(seuContato)
    }
}

console.log(`
O quarto ${quarto[0]} está ocupado pelo(a) ${nome[0]}
E-mail para contato: ${contato[0]}`)

console.log(`
O quarto ${quarto[1]} está ocupado pelo(a) ${nome[1]}
E-mail para contato: ${contato[1]}`)

console.log(`
O quarto ${quarto[2]} está ocupado pelo(a) ${nome[2]}
E-mail para contato: ${contato[2]}`)