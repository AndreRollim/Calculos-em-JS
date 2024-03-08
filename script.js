/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [x]  A soma dos dois números;
- [x]  A subtração dos dois números;
- [x]  A multiplicação dos dois números;
- [x]  A divisão dos dois números;
- [x]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [x]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [x]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~. 
*/

alert(`
Olá, tudo bem? Hoje iremos realizar alguns 
cálculos a partir de dois valores que 
você deverá digitar. Vamos lá?!`)

let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo
let restDiv = numberOne % numberTwo

/*
alert(`A soma dos dois números é: ` + sum)
alert(`A subtração dos dois números é: ` + sub)
alert(`A multiplicação dos dois números é: ` + mult)
alert(`A divisão dos dois números é: ` + div)
alert(`O resto da divisão dos dois números é: ` + restDiv) 
*/

alert(`
 A soma dos dois números é: ${sum}
 A subtração dos dois números é: ${sub}
 A multiplicação dos dois números é: ${mult}
 A divisão dos dois números é: ${div}
 O resto da divisão dos dois números é: ${restDiv}
`)

if( sum % 2 === 0) {
    alert("A soma dos dois números é par!")
} else {
    alert("A soma dos dois números é ímpar")
}

if (numberOne != numberTwo) {
    alert("Os números digitados são diferentes!")
} else {
    alert("Os números digitados são iguais!")
}
