function analisar() {
    let num = document.getElementById('number')
    let res = document.getElementById('result')

    if (num.value.length == 0) {
        alert('[ERRO] Insira um número!')
    } else {
        let fibonacci = [0, 1]
        for (let min = 2; min <= 50; min++) {
            fibonacci.push(fibonacci[min - 2] + fibonacci[min - 1])
        }
    
        let busca = fibonacci.indexOf(Number(num.value))
        if (busca == -1) {
            alert(`[NÃO] O número ${num.value} não pertence à sequência de Fibonacci`)
        } else {
            alert(`[SIM] O número ${num.value} pertence à sequência de Fibonacci`)
        }
    }
}