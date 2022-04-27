//chiedo all'utente il suo nome
const firstname = prompt ("Inserisci il tuo nome");
//chiedo all'utente il suo cognome
const secondname = prompt ("Inserisci il tuo cognome");
//chiedo all'utente il suo colore preferito
const preferredColor = prompt ("Inserisci il tuo colore preferito");
//scrivo sulla pagina nomecognomecolorepreferito21
const generatedPassword = firstname + secondname + preferredColor + "21";
//stampa su console:
//console.log(pswgenerator) 
//attribuisco variabile al mio id html
const psw_created = document.getElementById("psw_created").innerHTML;
document.getElementById("psw_created").innerHTML = `${psw_created} ${generatedPassword}`;