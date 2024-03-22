let fibonacci = [0, 1]

for (let min = 2; min <= 50; min++) {
    fibonacci.push(fibonacci[min - 2] + fibonacci[min - 1])
}

let num = Number(prompt ('Digite um número: '))
let busca = fibonacci.indexOf(num)

if (busca === -1) {
  console.log(`O número ${num} não pertence à sequência Fibonacci`)
} else {
  console.log(`O número ${num} pertence à sequência Fibonacci`)
}

/* Talvez esse código não rode direito no vscode, no meu caso ele não estava aceitando bem o comando prompt. Mas rodei no terminal online e estava tudo certo */

/* Em caso de mal funcionamento deste código e por eu confiar mais no uso do input para coletar dados no vscode, criei uma versão web simples na mesma pasta em que esta se encontra */
