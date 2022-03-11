console.log('JS OK!');

// Il software chiede per 5 volte all’utente di inserire un numero
// Il programma stampa la somma di tutti i numeri inseriti
// Esegui questo programma in due versioni, con for e con while


/*
let inputNumbers;

let sum = 0;

while (isNaN(inputNumbers)) {

    for (let i = 0; i < 5; i++) {
        inputNumbers = parseInt(prompt('Inserisci un numero'));
        console.log(inputNumbers);
        sum = sum + inputNumbers;
    }

}
console.log(sum);
*/

// ---------- versione con while ---------- //

let inputNumbers;

let sum = 0;

let i = 0;

while (i < 5) {
    inputNumbers = parseInt(prompt('Inserisci un numero'));

    if (!isNaN(inputNumbers)) {
        i++;
        sum = sum + inputNumbers;
    } else {
        alert('Inserisci solo numeri, non lettere')
    }

}
console.log(sum);