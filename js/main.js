// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
const kmToDo = parseInt(prompt("Quanti km devi percorrere?"));
console.log("kmToDo:", kmToDo);

// L'età del passeggero.
const age = parseInt(prompt("Inserisci la tua età"));
console.log("age:", age);

// Il prezzo del biglietto è definito in base ai km (0.21 € al km)
const ticketPrice = (kmToDo * 0.21) "€";
console.log("ticketPrice:", ticketPrice);
