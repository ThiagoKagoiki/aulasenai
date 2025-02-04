function Fatorial(n){
    let mult = 1

    for(let i = 1; i <= n; i++){
        mult *= i
    }

    console.log(mult)
}

Fatorial(4)