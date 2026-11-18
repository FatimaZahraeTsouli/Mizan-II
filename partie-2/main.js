import {recupererArticle} from "./api.js";
import {afficherArticles} from "./ui.js";
import {rechercher, filtrer, trier} from "./functions.js";


const rechercherinput = document.getElementById("rechercher");
const statutinput = document.getElementById("statut");
const trierinput = document.getElementById("Trier");
const listesbijoux = document.getElementById("listesbijoux");
const button = document.getElementById("button");
const text = document.getElementById("text");

// creer les carte dynamiquement

const data = await recupererArticle();

// ajouter data supplémentaire

const articles = data.map(article => ({
    ...article,
    statut: "Disponible",
    prix: 100,
    date: "2026-11-18"
}));
afficherArticles(articles);
console.log(articles[0]);

// rechercher data

rechercherinput.addEventListener("input", function(){
    const resultats = rechercher(articles, rechercherinput.value);
    afficherArticles(resultats);

});


// fitrer data 

statutinput.addEventListener("change", function(){
    const resultats = filtrer(articles, statutinput);
    afficherArticles(resultats);
})

// trier data 

trierinput.addEventListener("change", function(){
    const resultats = trier(articles, trierinput.value);
    afficherArticles(resultats);
})








