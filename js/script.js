const btnChuck = document.getElementById('fetchJoke')

// funcion de fetch para obtener chiste


function obtenerJoke (){
    btnChuck.addEventListener("click", () =>  
       fetch("https://api.chucknorris.io/jokes/random") 
        .then((response)=> {
        if (!response.ok){
            throw new Error ("No hay chiste"); 
        }
        return response.json();        
        })
        .then((data) => {
            console.log(data)
            let joke = data.value;
            guardarJoke(joke);

              
        })
        .catch((error) => {
            console.error("error al obtener datos de la API");
        })
    )};    

function guardarJoke (joke){
    const jokeEntry = document.createElement("li");
    jokeEntry.textContent = joke;
    jokeList.appendChild(jokeEntry);
}

// function guardarJokeLocalStorage(joke){
//     let jokes = localStorage.getItem();
//     //if (jokes === null)
// }

// localStorage.setItem("chiste",JSON.parse(joke));










    obtenerJoke();