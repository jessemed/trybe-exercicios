// Exercício 01: crie um algoritmo que retorne o fatorial de 10.

/*let numFatorial = 10;
let resultado = 1;

for (contador = numFatorial; contador > 0; contador-=1){
    resultado = contador * resultado; 
}
console.log(resultado);*/

//-----------------------------------------------

// Exercício 02: desenvolva um algoritmo que é capaz de inverter uma palavra.

/*let word = 'tryber';
let wordBack = '';



for (index = word.length - 1; index >=0; index -= 1){
    wordBack = wordBack.concat(word[index]);
}
console.log(wordBack);*/

//---------------------------------------------------

// Exercício 03: Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

/*let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];
let smallestWord = array[1];


for (index = 1; index < array.length; index += 1){
    if (biggestWord.length <= array[index].length) {
        biggestWord = array[index];
    }
}

for (index = 0; index < array.length; index += 1){
    if (smallestWord.length >= array[index].length) {
        smallestWord = array[index];
    }
}

console.log('A maior palavra é: ' + biggestWord);
console.log('A menor palavra é: ' + smallestWord); */

//--------------------------------------------------------

//Exercíicio 04: Maior número primo entre 0 e 50.

let maiorPrimo = 0;

for (let contador = 0; contador <= 50; contador += 1){
    let primeNumber = true;
    for (let divisor = 2; divisor < contador; divisor += 1){
        if (contador % divisor === 0){
            primeNumber = false;
        }
    }
    if (primeNumber){
        maiorPrimo = contador;
    }
}
console.log(maiorPrimo);