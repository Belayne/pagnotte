/*Questo codice dimostra che il programmatore nel seguente testo non sa programmare.

LA BATTUTA

Un programmatore sta andando al negozio. Sua moglie gli dice:
“Prendi una pagnotta e, se hanno le uova, prendine una dozzina”.
Il tizio torna con 12 pagnotte.
*/

let numeroDiPagnotte = 0;
let hannoLeUova = true;

const prendiPagnotte = (quante) => {numeroDiPagnotte += quante};

prendiPagnotte(1)   // Prendi una pagnotta

if(hannoLeUova) {   // e, se hanno le uova,

    prendiPagnotte(12); // prendine una dozzina.
}

console.log(numeroDiPagnotte);




