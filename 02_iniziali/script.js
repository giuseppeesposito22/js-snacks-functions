/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
const firstChar = (namesArray) => {
  let initialCharArray = [];

  for (let i = 0; i < namesArray.length; i++) {
    initialCharArray.push(namesArray[i][0]);
  }

  return initialCharArray;
};

// Invoca la funzione qui e stampa il risultato in console

console.log(firstChar(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
