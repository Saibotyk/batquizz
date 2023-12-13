// Tableau de questions/réponses
const questionsArray = [
    ["Quel est le vrai nom de Batman ?", [0, "Maurice Lee"], [0, "Lex Luthor"], [1, "Bruce Wayne"], [0, "Stan Lee"]],
    ["Quelle est la ville fictive où se déroulent la plupart des aventures de Batman ?", [0, "Metropolis"], [1, "Gotham City"], [0, "Central City"], [0, "Star City"]],
    ["Quel est le nom du fidèle majordome de Bruce Wayne ?", [0, "Alfred Pennywise"], [1, "Alfred Pennyworth"], [0, "Alfred Hitchcock"], [0, "Alfred Molina"]],
    ["Quel super-vilain est connu pour être l'ennemi juré de Batman, avec un visage défiguré ?", [0, "Le Sphinx"], [0, "Double-Face"], [1, "Le Joker"], [0, "L'Épouvantail"]],
    ["Quelle Batgirl est la fille du commissaire de police James Gordon ?", [0, "Lady Gaga"], [0, "Helena Bertinelli"], [1, "Barbara Gordon"], [0, "Selina Kyle"]],
    ["Dans quelle institution mentale est généralement interné l'ennemi de Batman, L'Épouvantail ?", [0, "Arkham City"], [0, "Belle Reve"], [1, "Arkham Asylum"], [0, "The Raft"]],
    ["Quelle est la voiture emblématique de Batman ?", [1, "La Batmobile"], [0, "Le Batwing"], [0, "Le Batboat"], [0, "Le Batcycle"]],
    ["Quelle équipe de super-héros Batman rejoint-il fréquemment ?", [0, "Les Vengeurs"], [1, "La Ligue de Justice"], [0, "Les X-Men"], [0, "Les Quatre Fantastiques"]],
    ["Quel acteur a incarné Batman dans la trilogie de films réalisée par Christopher Nolan ?", [0, "Michael Keaton"], [0, "Val Kilmer"], [1, "Christian Bale"], [0, "George Clooney"]],
    ["Quel est le nom de la coéquipière de Batman, également connue sous le nom de Selina Kyle ?", [0, "Poison Ivy"], [0, "Harley Quinn"], [1, "Catwoman"], [0, "Wonder Woman"]],
];


// Recuperer les éléments du DOM
const questions = document.querySelector("#questions");
const result = document.querySelector("#result");
const asw0 = document.querySelector("#asw-0");
const asw1 = document.querySelector("#asw-1");
const asw2 = document.querySelector("#asw-2");
const asw3 = document.querySelector("#asw-3");
// Utiliser pour afficher le numéro de la question
const nbr = document.querySelector("#nbr-qst");
// Utiliser pour afficher le score
const hidden = document.querySelector("#hidden");
// Utiliser pour afficher le nom et le gif du personnage qui félicite le score
const perso1 = document.querySelector("#perso");
const perso2 = document.querySelector("#perso1");


// Déclarer les variables
let index = 0;
let score = 0;


// Fonction pour vérifier les réponses
function checkAnswer(nbr) {
    if (questionsArray[index][nbr][0] === 1) {
        score++;
    }
    index++;
    displayQuestion(index)
}


// Fonction pour afficher la question ou le résultat
function displayQuestion(index) {
    if (index < questionsArray.length) {
        nbr.innerText = "Question " + (index + 1);
        questions.innerText = questionsArray[index][0];
        asw0.innerText = questionsArray[index][1][1];
        asw1.innerText = questionsArray[index][2][1];
        asw2.innerText = questionsArray[index][3][1];
        asw3.innerText = questionsArray[index][4][1];
    } else {
        hidden.classList.remove("hidden");
        result.innerText = (score === 1) ? "Vous avez 1 bonne réponse sur 10": "Vous avez " + score + " bonnes réponses sur 10" ;
        perso1.innerText = (score <= 5) ? "Le Joker est fier de vous" : "Batman compte sur vous pour la relève";
        perso2.src = (score <= 5) ? "assets/img/joker.gif" : "assets/img/batman1.gif";
    }
};


// Detection du clique sur les réponses
asw0.addEventListener('click', function (e) {
    checkAnswer(1);
});
asw1.addEventListener('click', function (e) {
    checkAnswer(2);
});
asw2.addEventListener('click', function (e) {
    checkAnswer(3);
});
asw3.addEventListener('click', function (e) {
    checkAnswer(4);
});