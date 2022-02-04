/*
  Che giorno è oggi?
  Scrivi un programma che dato un numero intero compreso tra 1 a 7
  visualizzi il corrispondente giorno della settimana. Sapendo che:
    1 = lunedì
    2 = martedì
    3 = mercoledì
    ...
    7 = domenica
  Utilizza il costrutto Switch-case e prevedi anche il caso in cui il valore immesso non sia valido
  (nel caso stampare un messaggio di errore a tua scelta).

  Esempi:
    Input: numero = 6
    Output: "Sabato"

    Input: numero = 10
    Output: "Errore! Giorno della settimana non valido!"

  Variante:
  Scrivere una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.

  http://www.imparareaprogrammare.it
*/

let day = parseInt(prompt('INSERISCI UN NUMERO TRA 1 E 7 PER VISUALIZZARE IL RELATIVO GIORNO DELLA SETTIMANA'));

switch (day) {
    case (1) : console.log(day + ' = LUNEDI\'');
    break;
    case (2) : console.log(day + ' = MARTEDI\'');
    break;
    case (3) : console.log(day + ' = MERCOLEDI\'');
    break;
    case (4) : console.log(day + ' = GIOVEDI\'');
    break;
    case (5) : console.log(day + ' = VENERDI\'');
    break;
    case (6) : console.log(day + ' = SABATO\'');
    break;
    case (7) : console.log(day + ' = DOMENICA\'');
    break;
    default : console.log('HAI INSERITO UN NUMERO NON VALIDO');
};
