import {recupererArticle, ajouterArticle, modifierArticle, remplacerArticle, supprimerArticle} from "./api.js";
import {afficherArticles, getid, getMode} from "./ui.js";
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
    date: "2026-11-18",
    buttonmodifier: "Modifier",
    buttonremplacer: "Remplacer",
    buttonsupprimer: "Supprimer"
}));
afficherArticles(tableauarticles);

// rechercher data
rechercherinput.addEventListener("input", function(){
    const resultats = rechercher(tableauarticles, rechercherinput.value);
    afficherArticles(resultats);

});

// fitrer data 
statutinput.addEventListener("change", function(){
    const resultats = filtrer(tableauarticles, statutinput);
    afficherArticles(resultats);
})

// trier data 
trierinput.addEventListener("change", function(){
    const resultats = trier(tableauarticles, trierinput.value);
    afficherArticles(resultats);
})

// ajouter un article 


form.addEventListener("submit", async function(event){
    event.preventDefault();
    const articleId = getid();
    const mode = getMode();
    if (articleId !== null){
        if (mode === "modifier"){
            console.log(mode);
        const articlemodifier = {
        title : titreajout.value,
        body : descriptionajout.value,
        statut : statutajout.value,
        prix : Number(prixajout.value),
        date : dateajout.value,
        buttonmodifier : "Modifier",
        buttonremplacer : "Remplacer",
        buttonsupprimer : "Supprimer",
        erreur: messageerreur
        };
        const validation = validerarticle(articlemodifier);
        if (!validation){
            return;
        }
        ajouter.disabled = true;
        chargement.classList.remove("hidden");
    try {
        const resultatmodifier = await modifierArticle(articleId, articlemodifier);
        const index = tableauarticles.findIndex(article => article.id === articleId);
        tableauarticles[index] = resultatmodifier;
        afficherArticles(tableauarticles);
        form.reset();
        messageerreur.classList.add("hidden");
        chargement.textContent = "Modifier avec succés";
        chargement.classList.remove("hidden");
        chargement.classList.add("text-green-500");
           
    } catch(erreur){
        messageerreur.classList.remove("hidden");
        messageerreur.textContent = erreur.message;
        chargement.textContent = "Echec de modification!!";
        chargement.classList.add("text-red-500");  
    }finally{
        ajouter.disabled = false;
        ajouter.textContent = "Ajouter";
    }}
    else if (mode === "remplacer"){
        const articleremplacer = {
        title : titreajout.value,
        body : descriptionajout.value,
        statut : statutajout.value,
        prix : Number(prixajout.value),
        date : dateajout.value,
        buttonmodifier : "Modifier",
        buttonremplacer : "Remplacer",
        buttonsupprimer : "Supprimer",
        erreur: messageerreur
        };
        const validation = validerarticle(articleremplacer);
        if (!validation){
            return;
        }
        ajouter.disabled = true;
        chargement.classList.remove("hidden");
    try {
        const resultatremplacer = await remplacerArticle(articleId, articleremplacer);
        const index = tableauarticles.findIndex(article => article.id === articleId);
        tableauarticles[index] = resultatremplacer;
        afficherArticles(tableauarticles);
        form.reset();
        messageerreur.classList.add("hidden");
        chargement.textContent = "Remplacer avec succés";
        chargement.classList.remove("hidden");
        chargement.classList.add("text-green-500");
           
    } catch(erreur){
        messageerreur.classList.remove("hidden");
        messageerreur.textContent = erreur.message;
        chargement.textContent = "Echec de remplacement!!";
        chargement.classList.add("text-red-500");  
    }finally{
        ajouter.disabled = false;
        ajouter.textContent = "Ajouter";
    }

    }
    else if (mode === "supprimer"){
        chargement.textContent = "Suppression en cours"
        chargement.classList.remove("hidden");
    try {
        await supprimerArticle(articleId);
        tableauarticles = tableauarticles.filter(article => article.id !== articleId);
        afficherArticles(tableauarticles);
        form.reset();
        messageerreur.classList.add("hidden");
        chargement.textContent = "Suppression avec succés";
        chargement.classList.remove("hidden");
        chargement.classList.add("text-green-500");
        console.log(articleId, typeof articleId);
        console.log(tableauarticles[0].id, typeof tableauarticles[0].id);
           
    } catch(erreur){
        messageerreur.classList.remove("hidden");
        messageerreur.textContent = erreur.message;
        chargement.textContent = "Echec de Suppression!!";
        chargement.classList.add("text-red-500");  
    }

    }

        
    }else {
    const article = {
        title : titreajout.value,
        body : descriptionajout.value,
        statut : statutajout.value,
        prix : Number(prixajout.value),
        date : dateajout.value,
        buttonmodifier : "Modifier",
        buttonremplacer : "Remplacer",
        buttonsupprimer : "Supprimer",
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
    form.reset();
    messageerreur.classList.add("hidden");
    chargement.textContent = "Charger avec succés";
    chargement.classList.remove("hidden");
    chargement.classList.add("text-green-500");
} catch (erreur) {
    messageerreur.classList.remove("hidden");
    messageerreur.textContent = erreur.message;
    chargement.textContent = "Echec de chargement!!";
    chargement.classList.add("text-red-500");
} finally {
    ajouter.disabled = false;
}}
})



        
        





