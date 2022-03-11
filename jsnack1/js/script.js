console.log('JS OK!');

// Crea un array di numeri interi
//somma tutti gli elementi che sono in posizione dispari

const arrNumeri = [23, 21, 7, 89, 77, 62, 32];

arrNumeri.length;

somma = 0;

for (let i = 1; i < arrNumeri.length; i = i + 2) {
    console.log(arrNumeri[i])
    somma = somma + arrNumeri[i];
}
console.log(somma);