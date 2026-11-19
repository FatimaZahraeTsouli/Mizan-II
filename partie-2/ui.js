const titreajout = document.getElementById("titreajout");
const descriptionajout = document.getElementById("descriptionajout");
const statutajout = document.getElementById("statutajout");
const prixajout = document.getElementById("prixajout");
const dateajout = document.getElementById("dateajout");
const ajouter = document.getElementById("ajouter");
const listesbijoux = document.getElementById("listesbijoux");

// creer les carte dynamiquement
let mode = null;
let articleId = null;
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
    const buttonmodifier = document.createElement("button");
    buttonmodifier.textContent = article.buttonmodifier;
    buttonmodifier.classList.add("border" , "rounded", "bg-blue-950", "text-white", "h-10", "w-50");
    const buttonremplacer = document.createElement("button");
    buttonremplacer.textContent = article.buttonremplacer;
    buttonremplacer.classList.add("border" , "rounded", "bg-blue-950", "text-white", "h-10", "w-50");
    carte.appendChild(titre);
    carte.appendChild(description);
    carte.appendChild(statut);
    carte.appendChild(prix);
    carte.appendChild(date);
    carte.appendChild(buttonmodifier);
    carte.appendChild(buttonremplacer);
    listesbijoux.appendChild(carte);

    // recuperer la carte a modifier et remplire les champs 
    
    buttonmodifier.addEventListener("click", function(){
        articleId = article.id;
        mode = "modifier";
        const index = this.closest(".article-carte");
        titreajout.value = index.querySelector("h3").textContent;
        descriptionajout.value = index.querySelectorAll("p")[0].textContent;
        statutajout.value = index.querySelectorAll("p")[1].textContent;
        prixajout.value = index.querySelectorAll("p")[2].textContent;
        dateajout.value = index.querySelectorAll("p")[3].textContent;
        ajouter.textContent = "Enregistrer";

    })

    buttonremplacer.addEventListener("click", function(){
        articleId = article.id;
        mode = "remplacer";
        ajouter.textContent = "Enregistrer";

    })
}

// trouver la carte a modifier 

export function getMode() {
    return mode;
}

export function getid(){
    return articleId;
}

// affcher les cartes dans la page 

export function afficherArticles(articles) {
    listesbijoux.innerHTML = "";

    articles.forEach(article => {
        carte(article);
    });
}


