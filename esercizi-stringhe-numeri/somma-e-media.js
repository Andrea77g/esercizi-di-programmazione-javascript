/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3
  
  http://www.imparareaprogrammare.it
*/
let a =[];

for (i=0;i<5;i++) {a[i] = parseInt(prompt('INSERISCI IL ' + (i+1) + '° NUMERO'));};

let sum;
function somma(a){
    sum=a.reduce( (x,y)=> x+y);
    return sum;
}; 
sum = somma(a);

console.log(`LA SOMMA DEL NUMERO E': ${sum} , MENTRE LA SUA MEDIA E' ${sum/a.length}`);
