// Get data 

export async function recupererArticle(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method : "GET"
        });
        if (!response.ok){
            if (response.status === 404){
                throw new Error("Article Introuvable (404)");
            
            } else if (response.status === 500){
                throw new Error("Erreur interne du serveur (500)");
        }else {
            throw new Error("Erreur HTTP : " + response.status);
            
        }
    }
        const data = await response.json();
        return data;
        
    } catch (error) {
                if (error instanceof TypeError) {
            throw new Error("Erreur réseau : vérifiez votre connexion Internet.");
        }
        throw error;  
    }
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


// Modifier data 

export async function modifierArticle(id, article){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method : "PATCH",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(article),
    });
    if (!response.ok){
        throw new Error("Une erreur a été détectée !!!");
        
    }
    const data = await response.json();
    return data;
}


// Remplacer data 

export async function remplacerArticle(id, article){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method : "PUT",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(article),
    });
    if (!response.ok){
        throw new Error("Une erreur a été détectée !!!");
        
    }
    const data = await response.json();
    return data;
}


// Supprimer data 

export async function supprimerArticle(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method : "DELETE"
    });
    if (!response.ok){
        throw new Error("Echec de suppression !!!");
        
    }

    return true;
}

