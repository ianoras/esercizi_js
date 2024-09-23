/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// 1. Number (Numero)
// Un numero può essere qualsiasi cifra: può essere intero o con la virgola.
let età = 10
let altezza = 1.5

// 2. String (Stringa)
// Una stringa per essere tale deve esserre rinchiusa tra virgolette o tra apici 
let saluto = "Ciao, come stai?"

// 3. Boolean (Vero o Falso)

let haiFame = true; // Sì, ho fame!
let haiSonno = false; // No, non ho sonno.

// 4. Undefined (Non Definito)
// Quando creiamo una variabile ma non la definiamo 
let variabile // La variabile non è ancora definita, in questo caso andandola a stampare con console.log ci darà "undefined"!

// 5. Null (Nulla)
// quando creiamo una variabile e la definiamo nulla 
let variabile2 = null; // La variabile è stata creata ed e stata definita null 

// 6. Object (Oggetto)
// Un oggetto è una variable con più proprietà
let cane = {
  nome: "Argo",
  età: 8,
  razza: "Labrador"
}

// 7. Array (Array)
// Un array è una lista, si racchiude  tra parentesi quadre.
let frutti = ["mela", "banana", "arancia"]


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

// Un ogetto in js è una struttura che ci permette di raccogiere più informazioni sottoforma di chiave-valore
// Ogni chiave è un nome che identifica una proprietà dell'ogetto e il valore può essere qualsiasi tipo di datatype, anche un altro ogetto.

let studente = {
    nome : "Francesco",
    età : 25,
    città : "Roma"
}

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let numero1 = 12
let numero2 = 20
let somma = (numero1 + numero2)
console.log(somma)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name = "Francesco"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
console.log(x - 4)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john"
let name2 = "John"
console.log(name1 !== name2)
console.log(name1 === name2.toLowerCase())
