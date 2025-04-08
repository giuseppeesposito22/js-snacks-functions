/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.

const countVowels = (phrase) => {
  let vowelsNumber = 0;

  for (let i = 0; i < phrase.length; i++) {
    if (
      phrase[i] === "a" ||
      phrase[i] === "e" ||
      phrase[i] === "i" ||
      phrase[i] === "o" ||
      phrase[i] === "u"
    ) {
      vowelsNumber += 1;
    }
  }

  return vowelsNumber;
};

// Invoca la funzione qui e stampa il risultato in console

console.log(countVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
