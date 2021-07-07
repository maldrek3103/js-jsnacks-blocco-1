// Crea due array di lunghezze differenti
// Crea un elemento random
// Verifica quale dei due array è più corto
// Inserici l'elemento random generato nell'array più corto
// Ripeto l'operazione finchè i due array non sono della stessa lunghezza

var firstArray = [42, 4, 123, 54, 673, 234, 1];
var secondArray = [4572, 45, 568, 2];


do {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    if (firstArray.length < secondArray.length) {
        firstArray.push(randomNumber);
    } else {
        secondArray.push(randomNumber);
    }
} while (firstArray.length === secondArray.length);

console.table(firstArray);
console.table(secondArray);