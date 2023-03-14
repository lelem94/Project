
// Dichiarazione API
const SWAPI = "https://swapi.dev/api/people/"

// Gestisco le promise con le await
async function showStarWarsPeople()
{

    // Esecuzione chiamata
    let chiamataAPI = await fetch(SWAPI)

    // Ottengo la risposta come semplice testo
    let responseText = await chiamataAPI.text()

    document.querySelector("body").innerHTML = "" // Svuoto il body

    // Conversione ad oggetto
    let starWarsPeople = JSON.parse(responseText).results

    // Debug
    console.log(starWarsPeople)

    for (let starWarsPerson of starWarsPeople)
    {
        document.querySelector("body").innerHTML += `<div class="alert alert-secondary" role="alert">Nome: <strong>${starWarsPerson.name}</strong> Altezza: <em>${starWarsPerson.height}cm</em></div>`
    }

}

// Ogni volta che la pagina viene caricata
window.onload = () => 
{
    document.querySelector("body").innerHTML = `<div class="alert alert-info" role="alert"><strong>Caricamento personaggi...</strong></div>`
    showStarWarsPeople()
}