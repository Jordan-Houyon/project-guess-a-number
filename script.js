let envoi = document.getElementById("send");
let resultat = document.getElementById("resultat");
let checked = document.getElementById("text");
let bot = Math.floor(Math.random() * 100);
let starter = false;

document.getElementById("start").addEventListener("click", function () {
    start();
})

let essai = 0;

send.addEventListener("click", function () {
    envoi_resultat();

})

function envoi_resultat() {
    while (essai < 11) {
        resultat.innerHTML = "Votre résultat est " + checked.value + "Résultat du bot" + bot;
        if (parseInt(checked.value) < bot) {
            resultat.innerHTML = "C'est plus grand" + " "  +  "Tu as utilisé: " + "" + essai + ""+ "essai(s) . Continue t'es nul tu vas mourir";
            essai++;
            break;
        } else if (parseInt(checked.value) > bot) {
            resultat.innerHTML = "C'est plus petit" + " " + "Tu as utilisé: " + "" + essai + "" + "essai(s). T'es sur la voie de la mort."
            essai++;
            break
        } else {
            resultat.innerHTML = "Et bah voila t'as trouvé , c'était pas trop tôt .Bravo tu peux continuer de vivre ."
        }
    }
    if (essai > 10) {
        resultat.innerHTML = "Perdu, prépare toi, je vais te tuer ";
    }
}

function start() {
    if (!starter) {
        starter = true;

        let go = document.getElementById("start");
        go.innerText = "Relancer";
    } else {
        bot = Math.floor(Math.random() * 100);
        resultat.innerText = "La prochaine personne peut s'approcher et commencer la partie";
    }
}
