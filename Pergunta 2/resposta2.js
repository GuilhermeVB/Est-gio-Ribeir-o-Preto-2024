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