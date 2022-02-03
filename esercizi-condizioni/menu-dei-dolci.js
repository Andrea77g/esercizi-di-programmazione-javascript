/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/
const menu = ['1. Tiramisù', '2. Torta della nonna', '3. Cheesecake alla nutella', '4. Macedonia'];
console.log(`${menu[0]}\n${menu[1]}\n${menu[2]}\n${menu[3]}`);
let choice = parseInt(prompt('Scegli un dolce tra quelli disponibili da 1 a 4'));

if (choice<1 || choice>4) {console.log('Scelta non disponibile');}
else { switch (choice) {
       case 1: 
       console.log('Hai scelto il dolce Tiramisù');
       break;
       case 2: 
       console.log('Hai scelto il dolce Torta della nonna');
       break;
       case 3: 
       console.log('Hai scelto il dolce Cheesecake alla nutella');
       break;
       case 4: 
       console.log('Hai scelto il dolce Macedonia');
       break;
    }
}
