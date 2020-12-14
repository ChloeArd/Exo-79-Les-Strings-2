let pomme = "Elle est belle ma pomme !";

let indexPomme = document.getElementById("index-pomme");
indexPomme.innerHTML = pomme.lastIndexOf("pomme");

let lastIndexM = document.getElementById("last-index-m");
lastIndexM.innerHTML = pomme.lastIndexOf('m');

if(pomme.startsWith("Elle")) {
    console.log(pomme + " Commence par elle");
}

if (pomme.endsWith("!")) {
    console.log(pomme + " Se termine par un point d'exclamation")
}

document.getElementById("pomme").innerHTML = pomme.slice(18, 23);

for (let i = 0; i < pomme.length; i++) {
    let lettre = document.createElement("p");
    lettre.innerHTML = "-> " + pomme[i];
    document.getElementById("one-line").appendChild(lettre);

}