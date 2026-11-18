
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

