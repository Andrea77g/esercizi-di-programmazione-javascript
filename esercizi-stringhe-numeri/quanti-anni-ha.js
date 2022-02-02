/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/
let birthYear = parseInt(prompt('INSERIRE L\'ANNO DI NASCITA'));
let currentDate = new Date;2022
currentDate = currentDate.getFullYear();

function age(birthYear,currentDate) {
    let result;
    if (birthYear > currentDate) {result = 'HAI INSERITO UNA DATA NON VALIDA';}
    else {result='L\'eta è: ' + (currentDate-birthYear) + ' anni\nAnni mancanti per raggiungere 100 anni: ' + (100-(currentDate-birthYear));}
    return result;
};

console.log(age(birthYear,currentDate));
