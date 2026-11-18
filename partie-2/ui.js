import {recupererArticle} from "./api.js"

const listesbijoux = document.getElementById("listesbijoux");

// creer les carte dynamiquement

export function carte(article){
    const carte = document.createElement("div");
    carte.classList.add("article-carte");
    const titre = document.createElement("h3");
    titre.textContent = article.title;
    titre.classList.add("font-bold");
    const description = document.createElement("p");
    description.textContent = article.body;
    description.classList.add("font-semibold");
    const statut = document.createElement("p");
    statut.textContent = article.statut;
    statut.classList.add("font-semibold");
    const prix = document.createElement("p");
    prix.textContent = article.prix;
    prix.classList.add("font-semibold");
    const date = document.createElement("p");
    date.textContent = article.date;
    date.classList.add("font-semibold");
    carte.appendChild(titre);
    carte.appendChild(description);
    carte.appendChild(statut);
    carte.appendChild(prix);
    carte.appendChild(date);
    listesbijoux.appendChild(carte);
}


// affcher les cartes dans la page 

export function afficherArticles(articles) {
    listesbijoux.innerHTML = "";

    articles.forEach(article => {
        carte(article);
    });
}
