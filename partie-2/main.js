import {recupererArticle} from "./api.js";
import {afficherArticles} from "./ui.js";
import {rechercher} from "./articles.js";


const rechercherinput = document.getElementById("rechercher");
const statut = document.getElementById("statut");
const trier = document.getElementById("trier");
const listesbijoux = document.getElementById("listesbijoux");
const button = document.getElementById("button");
const text = document.getElementById("text");

// creer les carte dynamiquement

const data = await recupererArticle();
afficherArticles(data);

// rechercher data

rechercherinput.addEventListener("input", function(){
    const resultats = rechercher(data, rechercherinput.value);
    afficherArticles(resultats);

});













