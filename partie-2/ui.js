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
    carte.appendChild(titre);
    carte.appendChild(description);
    listesbijoux.appendChild(carte);
}

// affcher les cartes dans la page 

export function afficherArticles(articles) {
    listesbijoux.innerHTML = "";

    articles.forEach(article => {
        carte(article);
    });
}
