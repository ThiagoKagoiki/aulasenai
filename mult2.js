function Main(n1, n2){
    Soma(n1, n2)
    Dimi(n1, n2)
    Mult(n1, n2)
    Div(n1, n2)
}

function Soma(n1, n2){
    let soma = 0
    soma = n1 + n2
    console.log(soma)
}

function Dimi(n1, n2){
    let dimi = 0
    dimi = n1 - n2
    console.log(dimi)
}

function Mult(n1, n2){
    let mult = 0
    mult = n1 * n2
    console.log(mult)
}

function Div(n1, n2){
    let div = 0
    div = n1 / n2
    console.log(div)
}

Main(4, 5)