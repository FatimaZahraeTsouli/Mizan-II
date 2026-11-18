// Get data 

export async function recupererArticle(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method : "GET"
    });
    const data = await response.json();
    console.log(data[0]);
    return data;
}




