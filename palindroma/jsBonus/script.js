
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


// verificata che la funzione è ok sviluppo l'interfaccia per il DOM
