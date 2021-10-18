// chiede la parola da valutare e l'assegna ad una variabile
// parte la funzione in cui prende la parola la trasforma in array
//iverte l'arrey e trasforma di nuovo in stringa
// fa confronto tra stringhe e da l'esito



/*
//Segue lo sviluppo senza funzione

let parola = prompt("Inserisci una parola e vediamo se è palindroma : ")

let insertParola;

const messOK = " la parola che hai inserito è palindroma :)"

const messKO = " la parola che hai inserito NON è palindroma :("

insertParola = parola.split('');

console.log(insertParola);

insertParola = insertParola.reverse();

console.log(insertParola);

insertParola = insertParola.join('');

console.log(insertParola);

if (insertParola === parola) { console.log(messOK) }
else { console.log(messKO) };

*/

// Verificato che funziona ora realizzo il tutto sotto forma di funzione la funzione 


let parola = prompt("Inserisci una parola e vediamo se è palindroma : ")

let insertParola;

const messOK = " la parola che hai inserito è palindroma :)"

const messKO = " la parola che hai inserito NON è palindroma :("

let esito ="";


function palindroma(insertParola) {

    insertParola = parola.split('');

    console.log(insertParola);

    insertParola = insertParola.reverse();

    console.log(insertParola);

    insertParola = insertParola.join('');

    console.log(insertParola);

    if (insertParola === parola) { esito=messOK;}
    else { esito=messKO; }

    return esito;


}

palindroma(parola);

console.log(esito);


// verificata che la funzione è ok sviluppo l'interfaccia per il DOM
