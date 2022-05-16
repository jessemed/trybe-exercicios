//Exercicio 01: Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
}*/

//-------------------------------------------------------------------------------

//  Exercício 02: some todos os valores contidos no array e imprima o resultado;

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1){
    soma = numbers[index] + soma;
}
console.log(soma);*/

//---------------------------------------------------------------------------

//Exercícios 03: calcule e imprima a média aritmética dos valores contidos no array;

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1){
    soma = numbers[index] + soma;
}
console.log(soma / numbers.length);*/

//----------------------------------------------------------------------------

//Exercício 04: Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1){
    soma = numbers[index] + soma;
}

let resultado = (soma / numbers.length);
if (resultado > 20){
    console.log('Maior que 20');
} else {
    console.log('Menor que 20');
}*/

//-----------------------------------------------------------------

//Exercício 05: descubra qual o maior valor contido no array e imprima-o

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1){
    let elemento = numbers[index];
    for (contador = 0; contador < numbers.length; contador ++){
        if (elemento < numbers[contador] && elemento != numbers[contador])
    }
}

