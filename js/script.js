// Chiedere 5 volte all'utente di inserire un numero
// Verificare che i dati inseriti siano 'number' e non altro
// Eseguire la somma dei numeri inseriti dall'utente
// Stampare il risultato

// ---------- FOR -----------

// var sum = 0;

// for (var i = 0; i < 5; i++) {
//     var num;
//     do {
//         num = parseInt(prompt('Inserisci un numero'));
//     } while (isNaN(num));
//     sum += num;
// }


// ------------ WHILE --------------

var sum = 0;

var i = 0;
while (i < 5) {
    var num;
    do {
        num = parseInt(prompt('Inserisci un numero'));
    } while (isNaN(num));
    sum += num;
    i++;
}


var getDocument = document.getElementById('print');

getDocument.innerHTML = sum;