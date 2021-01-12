/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

const minXHours = 60;
const secXMinutes = 60;
const secXHours = 3600;
var inputSec = 12560;
var hours = Math.round(inputSec/secXHours);
console.log(hours);
/* con questi 2 passaggi calcoliamo i secondi restanti partendo dall'input e sottraendo le ore convertite
in secondi */
var secDiff = (inputSec-(hours*secXHours));
/* con questi 2 passaggi invece andiamo a calcolare i minuti restanti partendo dalla diff calcolata prima*/
var minutes = Math.round(secDiff/secXMinutes);
console.log(minutes);
/* ora invece non ci resta che convertire i minuti in secondi ed effettuare la differenza finale
per estrapolare i secondi mancanti */
var seconds = (inputSec - (hours*secXHours)-(minutes*secXMinutes));
console.log(seconds);
