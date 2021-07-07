// Chiedi un numero all'utente
// Verifica se il valore inserito dall'utente sia 'number' e non altro
// Stampa il numero se è pari
// Aggiungi 1 se il numero è dispari
// Stampa il risultato


var getDocument = document.getElementById('print');

var num = 0;

do {
    num = parseInt(prompt('Inserisci un numero'));
} while (isNaN(num));


if (num % 2 === 0) {
    getDocument.innerHTML = 'Il tuo numero è: ' + num;
} else {
    getDocument.innerHTML = 'Il tuo numero è: ' + (num + 1);
}


