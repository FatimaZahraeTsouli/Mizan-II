import {recupererArticle} from "./api.js"

const listesbijoux = document.getElementById("listesbijoux");

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



