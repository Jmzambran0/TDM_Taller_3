export function showPokemon(pokemon) {
    if (!pokemon) return
    closeModal()

    document.getElementById("pokemon-img").src = pokemon.sprite
    document.getElementById("pokemon-name").textContent = capitalize(pokemon.name)
    document.getElementById("pokemon-id").textContent = "#" + pokemon.id.toString().padStart(3, "0")

    document.getElementById("pokemon-img").onclick = () => showModalPokemon(pokemon)

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

function showModalPokemon(pokemon) {
    const modal = document.getElementById("pokemon-modal")
    const modalName = document.getElementById("modal-pokemon-name")
    const modalId = document.getElementById("modal-pokemon-id")
    const modalImg = document.getElementById("modal-pokemon-img")
    const modalHeight = document.getElementById("modal-pokemon-height")
    const modalWeight = document.getElementById("modal-pokemon-weight")
    const modalAbilities = document.getElementById("modal-pokemon-habilities")
    const modalStats = document.getElementById("modal-stats")

    modalName.textContent = capitalize(pokemon.name)
    modalId.textContent = "#" + pokemon.id.toString().padStart(3, "0")
    modalImg.src = pokemon.sprite
    modalHeight.textContent = pokemon.height
    modalWeight.textContent = pokemon.weight
    modalAbilities.textContent = pokemon.abilities.join(", ")
    modalStats.innerHTML = ""
    pokemon.stats.forEach(stat => {
        const statElement = document.createElement("p")
        statElement.innerHTML = `<strong>${capitalize(stat.name)}:</strong> ${stat.value}`
        modalStats.appendChild(statElement)
    })

    const closeButton = document.querySelector(".close-modal")
    closeButton.onclick = closeModal
    modal.style.display = "block"
}

function closeModal() {
    const modal = document.getElementById("pokemon-modal")
    modal.style.display = "none"
}