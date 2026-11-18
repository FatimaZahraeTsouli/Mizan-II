import {recupererArticle, ajouterArticle} from "./api.js";
import {afficherArticles} from "./ui.js";
import {rechercher, filtrer, trier, validerarticle} from "./functions.js";


const rechercherinput = document.getElementById("rechercher");
const statutinput = document.getElementById("statut");
const trierinput = document.getElementById("Trier");
const titreajout = document.getElementById("titreajout");
const descriptionajout = document.getElementById("descriptionajout");
const statutajout = document.getElementById("statutajout");
const prixajout = document.getElementById("prixajout");
const dateajout = document.getElementById("dateajout");
const ajouter = document.getElementById("ajouter");
const annuler = document.getElementById("annuler");
const messageerreur = document.getElementById("messageerreur");
const chargement = document.getElementById("chargement");
const form = document.getElementById("form");



// creer les carte dynamiquement
let tableauarticles = [];
const data = await recupererArticle();
tableauarticles = data;
afficherArticles(tableauarticles);

// ajouter data supplémentaire
tableauarticles = data.map(article => ({
    ...article,
    statut: "Disponible",
    prix: 100,
    date: "2026-11-18"
}));
afficherArticles(tableauarticles);

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

// ajouter un article 

form.addEventListener("submit", async function(event){
    event.preventDefault();
    const article = {
        title : titreajout.value,
        body : descriptionajout.value,
        statut : statutajout.value,
        prix : Number(prixajout.value),
        date : dateajout.value,
        erreur : messageerreur
    };
    const validation = validerarticle(article);
    if (!validation){
        return;
    }
    ajouter.disabled = true ;
    chargement.classList.remove("hidden");
    
try {
    const resultat = await ajouterArticle(article);
    tableauarticles.unshift(resultat);
    afficherArticles(tableauarticles);
    messageerreur.classList.add("hidden");
    chargement.textContent = "charger avec succés";
    chargement.classList.remove("hidden");
    chargement.classList.add("text-green-500");
} catch (erreur) {
    messageerreur.classList.remove("hidden");
    messageerreur.textContent = erreur.message;
    chargement.textContent = "echec de chargement!!";
    chargement.classList.add("text-red-500");
} finally {
    ajouter.disabled = false ;
}
})







