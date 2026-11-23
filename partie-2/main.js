import {recupererArticle, ajouterArticle, modifierArticle, remplacerArticle, supprimerArticle} from "./api.js";
import {afficherArticles, getid, getMode, resetmode, titrevide, vide} from "./ui.js";
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
chargement.classList.remove("hidden");
chargement.classList.add("text-gray-500");
const data = await recupererArticle();
tableauarticles = data;
chargement.textContent = "Chargés avec succés";
setTimeout(() => {
chargement.classList.add("hidden");
}, 3000);
chargement.classList.add("text-green-500");

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
    if (resultats.length === 0){
        titrevide.textContent = "Article non disponible!";
        vide.textContent = "Aucun article ne correspondent a votre recherche!!";
    }

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
    console.count("Nombre de submit");
    console.log("ID :", getid());
console.log("Mode :", getMode());
console.count("Submit");
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
        chargement.textContent = "Modification en cours";
        chargement.classList.add("text-gray-500");
        chargement.classList.remove("hidden", "text-green-500");
        setTimeout(() => {
        chargement.classList.add("hidden");
        }, 3000);
    try {
        const resultatmodifier = await modifierArticle(articleId, articlemodifier);
        const index = tableauarticles.findIndex(article => article.id === articleId);
        tableauarticles[index] = resultatmodifier;
        afficherArticles(tableauarticles);
        form.reset();
        messageerreur.classList.add("hidden");
        chargement.textContent = "Modifier avec succés";
        chargement.classList.remove("hidden");
        setTimeout(() => {
        chargement.classList.add("hidden");
        }, 3000);  
        chargement.classList.add("text-green-500");
           
    } catch(erreur){
        messageerreur.classList.remove("hidden");
        messageerreur.textContent = erreur.message;
        chargement.textContent = "Echec de modification!!";
        chargement.classList.remove("hidden");
        setTimeout(() => {
    chargement.classList.add("hidden");
}, 3000);
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
        chargement.classList.remove("hidden", "text-green-500");
        chargement.textContent = "Remplacement en cours";
        chargement.classList.add("text-gray-500");
        setTimeout(() => {
    chargement.classList.add("hidden");
}, 3000);
    try {
        const resultatremplacer = await remplacerArticle(articleId, articleremplacer);
        const index = tableauarticles.findIndex(article => article.id === articleId);
        tableauarticles[index] = resultatremplacer;
        afficherArticles(tableauarticles);
        form.reset();
        messageerreur.classList.add("hidden");
        chargement.textContent = "Remplacer avec succés";
        chargement.classList.remove("hidden");
        setTimeout(() => {
    chargement.classList.add("hidden");
}, 3000);
        chargement.classList.add("text-green-500");
           
    } catch(erreur){
        messageerreur.classList.remove("hidden");
        messageerreur.textContent = erreur.message;
        chargement.textContent = "Echec de remplacement!!";
        chargement.classList.remove("hidden");
        setTimeout(() => {
    chargement.classList.add("hidden");
}, 3000);
        chargement.classList.add("text-red-500");  
    }finally{
        ajouter.disabled = false;
        ajouter.textContent = "Ajouter";
    }

    }
    else if (mode === "supprimer"){
        chargement.textContent = "Suppression en cours";
        chargement.classList.add("text-gray-500");
        chargement.classList.remove("hidden", "text-green-500");
        setTimeout(() => {
    chargement.classList.add("hidden");
}, 3000);
    try {
        await supprimerArticle(articleId);
        tableauarticles = tableauarticles.filter(article => article.id !== articleId);
        afficherArticles(tableauarticles);
        console.log("Suppression terminée");
console.log("Mode :", getMode());
console.log("Articles :", tableauarticles);
console.log("Bouton ajouter désactivé :", ajouter.disabled);
        form.reset();
        messageerreur.classList.add("hidden");
        chargement.textContent = "Supprimer avec succés";
        chargement.classList.remove("hidden");
        setTimeout(() => {
    chargement.classList.add("hidden");
}, 3000);
        chargement.classList.add("text-green-500");
        resetmode();
           
    } catch(erreur){
        // tableauarticles.push(articleId);
        messageerreur.classList.remove("hidden");
        messageerreur.textContent = erreur.message;
        chargement.textContent = "Echec de Suppression!!";
        chargement.classList.add("text-red-500");  
        chargement.classList.remove("hidden");
        setTimeout(() => {
    chargement.classList.add("hidden");
}, 3000);
    }

    
    finally {
    ajouter.disabled = false;
    ajouter.textContent = "Ajouter";
}}

        
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
    chargement.classList.remove("hidden", "text-green-500");
    chargement.textContent = "Ajout en cours";
    chargement.classList.add("text-gray-500");
    setTimeout(() => {
    chargement.classList.add("hidden");
}, 3000);
    
try {
    const resultat = await ajouterArticle(article);
    tableauarticles.unshift(resultat);
    afficherArticles(tableauarticles);
    form.reset();
    messageerreur.classList.add("hidden");
    chargement.textContent = "Ajouter avec succés";
    chargement.classList.add("text-green-500");
    chargement.classList.remove("hidden");
    setTimeout(() => {
    chargement.classList.add("hidden");
}, 3000);
} catch (erreur) {
    messageerreur.classList.remove("hidden");
    messageerreur.textContent = erreur.message;
    chargement.textContent = "Echec d'ajout!!";
    chargement.classList.remove("hidden");
    setTimeout(() => {
    chargement.classList.add("hidden");
}, 3000);
    chargement.classList.add("text-red-500");
} finally {
    ajouter.disabled = false;
}}
})



        
        





