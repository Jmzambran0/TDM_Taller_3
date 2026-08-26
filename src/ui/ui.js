const MAX_STAT = 255;

export function showPokemon(pokemon) {
    if (!pokemon) return
    closeModal()

    const card = document.querySelector(".card")
    card.className = "card"
    card.classList.add(pokemon.types[0] + "1")

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
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalName = document.getElementById("modal-pokemon-name")
    const modalId = document.getElementById("modal-pokemon-id")
    const modalImg = document.getElementById("modal-pokemon-img")
    const modalHeight = document.getElementById("modal-pokemon-height")
    const modalWeight = document.getElementById("modal-pokemon-weight")
    const modalAbilities = document.getElementById("modal-pokemon-abilities")
    const modalStats = document.getElementById("modal-stats")

    modalName.textContent = capitalize(pokemon.name)
    modalId.textContent = "#" + pokemon.id.toString().padStart(3, "0")
    modalImg.src = pokemon.sprite
    modalHeight.textContent = (Number(pokemon.height)*0.1).toFixed(1) + " m"
    modalWeight.textContent = (Number(pokemon.weight)*0.1).toFixed(1) + " kg"
    modalAbilities.textContent = pokemon.abilities.join(", ")
    modalStats.innerHTML = ""
    pokemon.stats.forEach(stat => {
        const percentage = (stat.value / MAX_STAT) * 100;
        const statRow = document.createElement("div");
        statRow.classList.add("stat-row");
        statRow.innerHTML = `
            <span class="stat-name">${capitalize(stat.name)}</span>
            <div class="stat-bar-track">
                <div class="stat-bar-fill bar-${stat.name.toLowerCase()}" style="width: ${percentage}%"></div>
            </div>
            <span class="stat-value">${stat.value}</span>
        `;
        modalStats.appendChild(statRow);
    })

    const closeButton = document.querySelector(".close-modal")
    closeButton.onclick = closeModal
    modalOverlay.classList.add('active');
}

function closeModal() {
    const modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.classList.remove('active');
}