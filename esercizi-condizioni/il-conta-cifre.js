/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/
let choice = parseInt(prompt('Scegli un numero tra -9999 e 9999'));

if (choice>-10000 && choice<10000) {
    
    //console.log('ok')

    if (choice<0 && choice >-10000){choice*=-1;} //trasforma numeri negativi in positivi
    //console.log(choice);

    if (choice<10) {console.log('Il numero immesso ha una cifra')}
    else if (choice>=10 && choice<100) {console.log('Il numero immesso ha due cifre')}
    else if (choice>=100 && choice<1000) {console.log('Il numero immesso ha tre cifre')}
    else if (choice>=1000 && choice<10000) {console.log('Il numero immesso ha quattro cifre')}
}
else {console.log('Hai digitato un valore errato!');}
