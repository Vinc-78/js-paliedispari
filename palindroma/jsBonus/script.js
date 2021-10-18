
let insertParola;



const messOK = " la parola che hai inserito è palindroma :)"

const messKO = " la parola che hai inserito NON è palindroma :("

let esito ="";


function palindroma(insertParola) {

    let myArray;

    myArray = insertParola.split('');

   

    myArray = myArray.reverse();

    

    myArray = myArray.join('');

    

    if (myArray === insertParola) { esito=messOK;}
    else { esito=messKO; }

    console.log(esito);

    return esito;


}


// verificata che la funzione è ok sviluppo l'interfaccia per il DOM



let parolaInserita =document.querySelector("[name='parola']");

const risposta = document.querySelector(".esito");

const btn = document.getElementById("btn");

const reset = document.getElementById("reset");

btn.addEventListener("click", function () { 

    palindroma(parolaInserita.value) 


    risposta.innerHTML=esito; 



});