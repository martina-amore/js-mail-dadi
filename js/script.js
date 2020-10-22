// ESERCIZIO EMAIL
alert("Esercizio email: funzionanti pippo@gmail.com, luigi@hotmail.com, gianni@libero.it, eleonora@gmail.com, santo@gmail.com");

var emailArray = ["debug1", "debug2", "pippo@gmail.com", "luigi@hotmail.com", "gianni@libero.it","eleonora@gmail.com", "santo@gmail.com"];
console.log(emailArray);

var emailUtente = prompt("Inserisci la tua email: ");
console.log("emailutente: " + emailUtente);

document.getElementById("messaggio").innerHTML = "Email non presente nel database, accesso non consentito";

for (var i = 0; i < emailArray.length; i++) {
    if (emailArray[i] == emailUtente) {
        document.getElementById("messaggio").innerHTML = "Email nel database, accesso consentito";
    }
}

// ESERCIZIO DADI
var dadoUno = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
var dadoDue = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

document.getElementById("dado-1").innerHTML = "Giocatore ha lanciato un dado, è uscito " + dadoUno;
document.getElementById("dado-2").innerHTML = "Computer ha lanciato un dado, è uscito " + dadoDue;

if (dadoUno > dadoDue) {
    document.getElementById("vincente").innerHTML = "Giocatore ha vinto!";
}

else if (dadoUno < dadoDue) {
    document.getElementById("vincente").innerHTML = "Computer ha vinto!";
}

else {
    document.getElementById("vincente").innerHTML = "Giocatore e computer hanno pareggiato";
}
