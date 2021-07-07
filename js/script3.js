// Creare due array (nomi e cognomi vari)
// In maniera randomica prendere un nome ed un cognome dalle rispettive liste
// Unire i due elementi in modo da formare un nome+cognome fino a formare una lista da 3
// Evitare di far ripetere le stringhe generate due o più volte
// Stampare la lista creata

var names = ['Antonio', 'Marco', 'Luca', 'Francesca', 'Federica', 'Michelle', 'Luana', 'Gioconda', 'Achille', 'Ettore', 'Simona', 'Arnold', 'Zoan', 'Jim'];
var lastnames = ['Bischeri', 'Gagliardo', 'Figura', 'Sagoma', 'Pezzo', 'Giullare', 'Mercante', 'Pantofola', 'La Bella', 'Il Bello', 'Maschio', 'Zitta', 'Zitto'];

var invited = [];

for (var i = 0; i < 3; i++) {
    var randomName = names[Math.floor(names.length * Math.random(names.length))];
    var randomLastname = lastnames[Math.floor(lastnames.length * Math.random(lastnames.lenght))];
    invited.push(randomName + ' ' + randomLastname);
}

console.table(invited);


var getDocument = document.getElementById('print');

getDocument.innerHTML = invited.join(", ");