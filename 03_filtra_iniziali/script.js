/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
const filterByInitialChar = (namesArray, char) => {
  let filteredArray = [];

  for (let i = 0; i < namesArray.length; i++) {
    if (namesArray[i][0].toLowerCase() === char.toLowerCase())
      filteredArray.push(namesArray[i]);
  }

  return filteredArray;
};

// Invoca la funzione qui e stampa il risultato in console

console.log(filterByInitialChar(names, "a"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
