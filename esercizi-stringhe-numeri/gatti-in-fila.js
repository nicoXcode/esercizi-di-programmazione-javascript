/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/

//Dichiarazione variabili

    var totCats = 44;
    var catsXRows = 6;
    var numOfRows = 0;
    var missingCats;
    var i;

  // Questa è una soluzione più articolata che mostra anche l'utilizzo del ciclo for
  /*
    for (i = 0; totCats >= catsXRows; i++)
    {
      totCats = totCats-catsXRows;
      numOfRows++;
      missingCats = catsXRows-totCats;
    }
  */

  //Soluzione più snella che utilizza la matematica e la funzione Math.ceil

  numOfRows = Math.ceil(totCats/catsXRows);
  missingCats = totCats-(numOfRows*catsXRows);

  console.log("The num of rows are: " + numOfRows);
  console.log("The missing cats are: " + missingCats);
