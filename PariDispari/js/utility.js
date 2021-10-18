

function NumeroRandom() { 
     
    let numeroEstratto = Math.ceil(Math.random()*5); 

    return numeroEstratto; 
     
}


function Somma (numOne, numTwo) {

    let somma =numOne+numTwo ;

    return somma; 
}


function isPari (dato) {
     
    let esito="";

    if (dato%2===0) {esito="pari"}

    else {esito="dispari"}

    return esito;

}

let scelta="";

function vincita(puntata){

    if ( puntata===scelta) { 
             
             console.log("HAI VINTO!!! :)")
            
             return 1;}

             else {console.log("Hai Perso :( ")
            
             return 0;}

    

    
}

