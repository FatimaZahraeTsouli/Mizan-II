// fonction rechercher 

export function rechercher(articles, input){
    const inputmin = input.toLowerCase();
    const result = articles.filter(article => {
        const titremin = article.title.toLowerCase();

        return titremin.includes(inputmin);
    });
    return result;
} 
// fonction filtrer 

export function filtrer(articles, statutinput){
    const results = articles.filter(article => {
        const articlestatut = article.statut.toLowerCase();
        return statutinput.value.toLowerCase() === articlestatut;

    })
    return results;
}

// fonction trier

export function trier(articles, trierinput){
    switch (trierinput){
        case "ordreA": 
        articles.sort((a, b) => 
            a.title.localeCompare(b.title)
    );
        break;
        case "ordreP" :
            articles.sort((a, b) =>
                a.prix - b.prix
        );
        break;
        case "ordreD" :
            articles.sort((a, b) =>
            new Date(b.date) - new Date(a.date)
        );
        break;
    }
    return articles
}

// fonction valider

export function validerarticle(article){
    if (article.title.length < 3 || article.title.length > 80){
        article.erreur.classList.remove("hidden");
        article.erreur.textContent = "le titre doit contenir entre 3 et 80 caractères !!!"
        return false;
    }
    else if (article.body.length < 10){
        article.erreur.classList.remove("hidden");
        article.erreur.textContent = "la description doit contenir au moins 10 caractères!!!"
        return false;
    }
    else if (article.prix <= 0 || article.prix === ""){
        article.erreur.classList.remove("hidden");
        article.erreur.textContent = "le prix est invalide !!!"
        return false;
    }
    article.erreur.classList.add("hidden");
    return true
}
