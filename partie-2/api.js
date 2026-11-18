// Get data 
export async function recupererArticle(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method : "GET"
    });
    const data = await response.json();
    return data;
}

// Add data 

export async function ajouterArticle(article){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(article),
    });
    if (!response.ok){
        throw new Error("Erreur lors de l'ajout d'article!!!");
        
    }
    const data = await response.json();
    return data;
}



