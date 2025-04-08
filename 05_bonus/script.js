/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.

const saluta = (nome) => {
  const orario = new Date();

  let saluto = "";

  if (orario.getHours() <= 13) {
    saluto = `Buongiorno ${nome}`;
  } else if (orario.getHours() <= 17) {
    saluto = `Buon Pomeriggio ${nome}`;
  } else saluto = `Buonasera ${nome}`;

  return saluto;
};

// Invoca la funzione qui e stampa il risultato in console

console.log(saluta(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
