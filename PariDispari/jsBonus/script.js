const boxUtente = document.querySelector("[name ='number']");

const btnPari = document.getElementById("btnPari");

const btnDispari = document.getElementById("btnDispari");

let numeroScelto = document.querySelector(".numero-Scelto");

let numeroPC = document.querySelector(".numero-PC");

let somma = document.querySelector(".somma");

let segno = document.querySelector(".sommaSegno");

let risultato = document.querySelector(".risultato");


//inizio con l'evento che richiama le funzioni in utility 
// e assegna i valori agli elementi del DOM

btnPari.addEventListener("click", function () {

    let numeroInserito = parseInt(boxUtente.value);

    console.log("il numero inserito è ", numeroInserito)

    if (numeroInserito > 5 || isNaN(numeroInserito)) {

        alert("il numero inserito non è valido riprova")


    } else {
        numeroScelto.innerHTML = numeroInserito;

        let numPC = NumeroRandom();

        numeroPC.innerHTML = numPC;

        console.log("il numero estratto dal PC è ", numPC);

        let Totale = Somma(numeroInserito, numPC)

        somma.innerHTML = Totale;

        console.log("La somma dei due numeri è ", Totale);

        let SommaSegno= isPari(Totale);

        segno.innerHTML=SommaSegno;

        console.log("Il segno della somma è ", SommaSegno);

        let Conclusione ="";

        if(SommaSegno==="pari") {Conclusione="HAI VINTO !!!"}

        else { Conclusione="Non hai vinto :( "}

        console.log(Conclusione);
        risultato.innerHTML=Conclusione;

    }


})

//analoga la funzione per il dispari tranne per l'ultimo if 

btnDispari.addEventListener("click", function () {

    let numeroInserito = parseInt(boxUtente.value);

    console.log("il numero inserito è ", numeroInserito)

    if (numeroInserito > 5 || isNaN(numeroInserito)) {

        alert("il numero inserito non è valido riprova")


    } else {
        numeroScelto.innerHTML = numeroInserito;

        let numPC = NumeroRandom();

        numeroPC.innerHTML = numPC;

        let Totale = Somma(numeroInserito, numPC)

        somma.innerHTML = Totale;

        let SommaSegno= isPari(Totale);

        segno.innerHTML=SommaSegno;

        let Conclusione ="";

        if(SommaSegno==="dispari") {Conclusione="HAI VINTO !!!"}

        else { Conclusione="Non hai vinto :( "}

        risultato.innerHTML=Conclusione;

    }


})



