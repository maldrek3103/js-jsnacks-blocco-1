// Chiedi un numero all'utente
// Verifica se il valore inserito dall'utente sia 'number' e non altro
// Stampa il numero se è pari
// Aggiungi 1 se il numero è dispari
// Stampa il risultato

var num = 0;

do {
    num = parseInt(prompt('Inserisci un numero'));
} while (isNaN(num));

console.log('Numero scelto: ', num);

if (num % 2 === 0) {
    console.log('Il tuo numero è: ', num);
} else {
    console.log('I numeri dispari non esistono!', num + 1);
}
