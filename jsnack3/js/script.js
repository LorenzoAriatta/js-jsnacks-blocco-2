// Crea due array che hanno un numero di elementi diversi
// Aggiungi elementi casuali all’array che ha meno elementi
// fino a quando ne avrà tanti quanti l’altro

const longArray = [];

const shortArray = [];

for (let i = 0; i < 100; i++) {
    longArray.push(Math.floor(Math.random() * 1000));
    console.log(longArray[i]);
}