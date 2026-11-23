const form = document.getElementById("form");
const titreajout = document.getElementById("titreajout");
const descriptionajout = document.getElementById("descriptionajout");
const statutajout = document.getElementById("statutajout");
const prixajout = document.getElementById("prixajout");
const dateajout = document.getElementById("dateajout");
const ajouter = document.getElementById("ajouter");
const listesbijoux = document.getElementById("listesbijoux");
const modalsuppression = document.getElementById("modal-suppression");
const confirmersuppression = document.getElementById("confirmer-suppression");
const annulersuppression = document.getElementById("annuler-suppression");

// creer les carte dynamiquement
let mode = null;
let articleId = null;
export function carte(article){
    const carte = document.createElement("div");
    carte.classList.add("article-carte");
    carte.classList.add("border", "rounded", "w-200", "h-80", "px-4","py-2", "flex", "flex-col", "relative" );
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
    const divbutton = document.createElement("div");
    divbutton.classList.add( "absolute","bottom-2","left-0","right-0","flex","justify-center","gap-2");
    const buttonmodifier = document.createElement("button");
    buttonmodifier.textContent = article.buttonmodifier;
    buttonmodifier.classList.add("border" , "rounded", "bg-blue-950", "text-white", "h-10", "w-30");
    const buttonremplacer = document.createElement("button");
    buttonremplacer.textContent = article.buttonremplacer;
    buttonremplacer.classList.add("border" , "rounded", "bg-blue-950", "text-white", "h-10", "w-30");
    const buttonsupprimer = document.createElement("button");
    buttonsupprimer.textContent = article.buttonsupprimer;
    buttonsupprimer.classList.add("border" , "rounded", "bg-blue-950", "text-white", "h-10", "w-30");
    listesbijoux.classList.add("grid", "grid-cols-3", "gap-6", "mt-10");
    carte.appendChild(titre);
    carte.appendChild(description);
    carte.appendChild(statut);
    carte.appendChild(prix);
    carte.appendChild(date);
    divbutton.appendChild(buttonmodifier);
    divbutton.appendChild(buttonremplacer);
    divbutton.appendChild(buttonsupprimer);
    carte.appendChild(divbutton);
    listesbijoux.appendChild(carte);

    // recuperer la carte a modifier et remplire les champs 
    
    buttonmodifier.addEventListener("click", function(){
        form.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
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
        form.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
        articleId = article.id;
        mode = "remplacer";
        ajouter.textContent = "Enregistrer";

    })
    
    buttonsupprimer.addEventListener("click", function(){
        articleId = article.id;
        mode = "supprimer";
        modalsuppression.classList.remove("hidden");
    })

    
}

confirmersuppression.addEventListener("click", function(){
    modalsuppression.classList.add("hidden");
    form.requestSubmit();
})

annulersuppression.addEventListener("click", function(){
    modalsuppression.classList.add("hidden");
})
// trouver la carte a modifier 

export function getMode() {
    return mode;
}

export function getid(){
    return articleId;
}

export function resetmode(){
    mode = null;
    articleId = null;
}

// affcher les cartes dans la page 
export let titrevide;
export let vide;
export function afficherArticles(articles) {
    listesbijoux.innerHTML = "";

    articles.forEach(article => {
        carte(article);
    });

    if (articles.length === 0){
        const container = document.createElement("div");
        titrevide = document.createElement("p");
        vide = document.createElement("p");
        listesbijoux.classList.remove("grid", "grid-cols-3", "gap-6", "mt-10")
        container.classList.add("flex", "flex-col", "justify-center", "text-center", "items-center", "w-full", "min-h-screen")
        titrevide.classList.add("font-bold", "text-4xl", "whitespace-nowrap", "text-center");
        vide.classList.add("font-semibold", "text-2xl", "text-center");
        titrevide.textContent = "Aucun article disponible.";
        vide.textContent = "Votre catalogue est vide!!";
        container.appendChild(titrevide);
        container.appendChild(vide);
        listesbijoux.appendChild(container);
    }
}


