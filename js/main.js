// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
const kmToDo = parseInt(prompt("Quanti km devi percorrere?"));
console.log("kmToDo:", kmToDo);

if (isNaN(kmToDo)) {
  alert("Non sono ammesse lettere");
  throw new Error("L'utente ha inserito un valore non ammesso");
}

// L'età del passeggero.
const age = parseInt(prompt("Inserisci la tua età"));
console.log("age:", age);

if (isNaN(age)) {
  alert("Non sono ammesse lettere");
  throw new Error("L'utente ha inserito un valore non ammesso");
}

// Il prezzo del biglietto è definito in base ai km (0.21 € al km)
const ticketPrice = (kmToDo * 0.21).toFixed(2);
console.log("ticketPrice:", ticketPrice + "€");

// SE passeggero ha età compresa tra 18 e 65
if (age > 18 && age < 65);
{
  alert("Il costo del tuo biglietto è" + " " + ticketPrice + "€");
}

//  SE passeggero ha età < di 18 anni applica sconto
if (age < 18) {
  // Va applicato uno sconto del 20% per i minorenni
  const underAgeDisc = (ticketPrice * 20) / 100;
  const underAgeTick = (ticketPrice - underAgeDisc).toFixed(2);

  alert(
    "Hai diritto a uno sconto del 20% \n Il costo del tuo biglietto é" +
      " " +
      underAgeTick +
      "€"
  );
  console.log("underAgeTick:", underAgeTick + "€");
  //  SE passeggero ha età > di 65 anni applica sconto
} else if (age > 65) {
  // Va applicato uno sconto del 40% per gli over 65.
  const overAgeDisc = (ticketPrice * 40) / 100;
  const overAgeTick = (ticketPrice - overAgeDisc).toFixed(2);

  alert(
    "Hai diritto a uno sconto del 40% \n Il costo del tuo biglietto é" +
      " " +
      overAgeTick +
      "€"
  );
  console.log("overAgeTick:", overAgeTick + "€");
}
