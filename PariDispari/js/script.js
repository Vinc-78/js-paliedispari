// chiede all'utente se vuole pari o dispari e verifica
// chiede un numero e verifica

//genera un numero random tra 1 e 5 con una funzione

//somma i due numeri (utente e pc) e verifica se utente ha indovinato


let pariDispari = prompt(" Scrivi P per pari e D per dispari ");

pariDispari = pariDispari.toLowerCase();




if ((pariDispari === "p") || (pariDispari === "d")) {

   
    
    if (pariDispari ==="p") { scelta="pari"}
    else {scelta="dispari"}

    console.log(scelta); 

    let numeroUtente = prompt("Inserisci un numero da 1 a 5");

    numeroUtente = parseInt(numeroUtente);

    if ((isNaN(numeroUtente)) || (numeroUtente > 5)) {

        alert("Non hai inserito un valore valido, premi CTR+R")

    } else { console.log(numeroUtente);

             let numeroPC=NumeroRandom(); 

             console.log(numeroPC);

             let risultato = Somma(numeroUtente, numeroPC);

             console.log(risultato); 

             let verifica =isPari(risultato);

             console.log(verifica);

             let check=vincita(verifica);
             
             console.log(check); 

             if (check===1) { alert(`Hai scelto ${scelta}, giocato ${numeroUtente}
                             al pc è uscito ${numeroPC}, la somma è ${risultato} quindi HAI VINTO !!! `)}

             else { alert(`Hai scelto ${scelta}, giocato ${numeroUtente}
                           al pc è uscito ${numeroPC}, la somma è ${risultato} quindi Hai perso :( Ritenta `)}


    
    }





} else { alert("Non hai inserito un valore valido, premi CTR+R") }



