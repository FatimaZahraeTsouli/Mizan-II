
// fonction rechercher 

export function rechercher(articles, input){
    const inputmin = input.toLowerCase();

    const result = articles.filter(article => {
        const titremin = article.title.toLowerCase();

        return titremin.includes(inputmin);
    });
    return result;
}

// fonction trier 




// fonction filtrer 