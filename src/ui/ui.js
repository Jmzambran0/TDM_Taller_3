export function showPokemon(pokemon) {
    if (!pokemon) return

    document.getElementById("pokemon-img").src = pokemon.sprite
    document.getElementById("pokemon-name").textContent = capitalize(pokemon.name)
    document.getElementById("pokemon-id").textContent = "#" + pokemon.id.toString().padStart(3, "0")

    const typesContainer = document.getElementById("pokemon-types")
    typesContainer.innerHTML = ""
    pokemon.types.forEach(type => {
        const typeElement = document.createElement("span")
        typeElement.textContent = capitalize(type)
        typeElement.classList.add("type", type)
        typesContainer.appendChild(typeElement)
    })
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}