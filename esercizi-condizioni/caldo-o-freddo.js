/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/

let days =['domenica','lunedì','martedì','mercoledì','giovedì','venerdì','sabato'];
let temp =[];
let validation=[];

for (i=0;i<7;i++) {temp[i] = parseFloat(prompt('Inserisci la temperatura di ' + days[i] + ' (da -99°C a + 99°C)'));
                   if (temp[i]<-99 || temp[i]>99) {validation[i]=false;break;}
};

function compare(temp){ 
let tmax, tmin; 
  
    if(temp[0]>temp[1]) {tmax = temp[0]; tmin = temp[1];}
    else {tmax = temp[1]; tmin = temp[0];}

    if(temp[2]>tmax) {tmax=temp[2];}
    else if(temp[2]<tmin) {tmin=temp[2];}
    
    if(temp[3]>tmax) {tmax=temp[3];}
    else if(temp[3]<tmin) {tmin=temp[3];}

    if(temp[4]>tmax) {tmax=temp[4];}
    else if(temp[4]<tmin) {tmin=temp[4];}

    if(temp[5]>tmax) {tmax=temp[5];}
    else if(temp[5]<tmin) {tmin=temp[5];}

    if(temp[6]>tmax) {tmax=temp[6];}
    else if(temp[6]<tmin) {tmin=temp[6];}
 
    console.log('La giornata più calda è stata ' + days[temp.indexOf(tmax)] + ' con ' + tmax + '°C');
    console.log('La giornata più fredda è stata ' + days[temp.indexOf(tmin)] + ' con ' + tmin + '°C');
};

if (!validation.includes(false)) {compare(temp);}
else {console.log('Hai digitato un valore errato!');}

