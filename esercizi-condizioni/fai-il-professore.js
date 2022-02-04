/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/

/*
let vote = parseInt(prompt('INSERISCI IL VOTO TRA 1 E 30'));

if (vote>=1 && vote<=30)
{
    if (vote<18) {console.log('VOTO ' + vote + ' : INSUFFICIENTE');}
    else if (vote>=18 && vote<21) {console.log('VOTO ' + vote + ' : SUFFICIENTE');}
    else if (vote>=21 && vote<24) {console.log('VOTO ' + vote + ' : BUONO');}
    else if (vote>=24 && vote<27) {console.log('VOTO ' + vote + ' : DISTINTO');}
    else if (vote>=27 && vote<=29) {console.log('VOTO ' + vote + ' : OTTIMO');}
    else {console.log('VOTO ' + vote + ' : ECCELLENTE');}
}
else {console.log('HAI INSERITO UN VOTO NON VALIDO');}
*/


let vote = parseInt(prompt('INSERISCI IL VOTO TRA 1 E 30'));
switch (vote){
    case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: 
    case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17:
        console.log('VOTO ' + vote + ' : INSUFFICIENTE');
    break;

    case 18: case 19: case 20:
        console.log('VOTO ' + vote + ' : SUFFICIENTE');
    break;        

    case 21: case 22: case 23:
        console.log('VOTO ' + vote + ' : BUONO');
    break;         

    case 24: case 25: case 26:
        console.log('VOTO ' + vote + ' : DISTINTO');
    break;             

    case 27: case 28: case 29:
        console.log('VOTO ' + vote + ' : OTTIMO');
    break;   

    case 30:
        console.log('VOTO ' + vote + ' : ECCELLENTE');
    break;   

    default: console.log('HAI INSERITO UN VOTO NON VALIDO')
}

