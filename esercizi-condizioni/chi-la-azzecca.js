/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/


let num1 = parseInt(prompt('GIOCATORE 1, SCEGLI UN NUMERO DA 1 A 100'));
let num2 = parseInt(prompt('GIOCATORE 2, SCEGLI UN NUMERO DA 1 A 100'));

if (num1<1 || num1>100 || num2<1 || num2>100) {console.log('HAI INSERITO UN NUMERO NON VALIDO');}
else {game(num1,num2)}

function game(num1,num2){

let randomNum = Math.random() * (100-1) + 1;
randomNum = Math.floor(randomNum);

console.log('IL NUMERO CASUALE E\' :' + randomNum); 
console.log('IL GIOCATORE 1 HA SCELTO IL NUMERO:' + num1); 
console.log('IL GIOCATORE 2 HA SCELTO IL NUMERO:' + num2); 

let delta1 = num1 - randomNum;
let delta2 = num2 - randomNum;

delta1 = (delta1<0) ? (delta1*-1) : (delta1);
delta2 = (delta2<0) ? (delta2*-1) : (delta2);

if (num1 === randomNum) {console.log('IL GIOCATORE 1 HA INDOVINATO');}
else if (num2 === randomNum) {console.log('IL GIOCATORE 2 HA INDOVINATO');}
else if (delta1<delta2) {console.log('NESSUNO DEI DUE GIOCATORI HA INDOVINATO, MA IL GIOCATORE 1 SI E\' AVVICINATO DI PIU\'');}
else if (delta1>delta2) {console.log('NESSUNO DEI DUE GIOCATORI HA INDOVINATO, MA IL GIOCATORE 2 SI E\' AVVICINATO DI PIU\'');}
else {console.log('PERFETTA PARITA\'');}
};
