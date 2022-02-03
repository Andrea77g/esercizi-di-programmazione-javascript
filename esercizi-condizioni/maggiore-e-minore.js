/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/

/*let a =[];

for (i=0;i<4;i++) {a[i] = parseInt(prompt('INSERISCI IL ' + (i+1) + '° NUMERO'));};
console.log(a);

let maggiore = (a)=>Math.max(...a);
let minore = (a)=>Math.min(...a);

console.log('il numero maggiore è: ' + maggiore(a));
console.log('il numero minore è: ' + minore(a));
*/

let a =[];

for (i=0;i<4;i++) {a[i] = parseInt(prompt('INSERISCI IL ' + (i+1) + '° NUMERO'));};
console.log(a);

function compare(a){ 
let max, min, compare; 
  
    if(a[0]>a[1]) {max = a[0]; min = a[1];}
    else {max = a[1]; min = a[0];}

    if(a[2]>max) {compare=max; max=a[2];}
    else if(a[2]<min) {compare=min; min=a[2];}
    else {compare=a[2];}

    if(a[3]>max) {compare=max; max=a[3];}
    else if(a[3]<min) {compare=min; min=a[3];}
    else {compare=a[3];}
 
    console.log('il numero maggiore è: ' + max);
    console.log('il numero minore è: ' + min);
};

compare(a);
