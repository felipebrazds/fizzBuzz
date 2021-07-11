// fizzBuzz
// A entrada é divisível por 3 = Fizz
// A entrada é divisível por 5 = Buzz
// A entrada é divisível por 3 e por 5 = FizzBuzz
// A entrada não é um número = Erro! Não é um número
// A entrada não é divisível por 3 nem por 5 = O número não é divisível por 3 nem por 5

let resultado = fizzBuzz(); // Inserir a entrada
console.log(resultado)

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Erro! ' + entrada + ' não é um número';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz'
    if (entrada % 3 === 0)
        return 'Fizz'    
    if (entrada % 5 === 0)
        return 'Buzz'    
    /* if ((entrada % 5 !== 0) || (entrada % 3 !== 0))
        return 'O número ' + entrada + ' não é divisível por 3 nem por 5' */
    return 'O número ' + entrada + ' não é divisível por 3 nem por 5'
}