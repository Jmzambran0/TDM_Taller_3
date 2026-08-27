import { fetchPokemon } from "./services/api.js";
import { showPokemon } from "./ui/ui.js";

let currentPokemonId = 1;

async function loadPokemon(id) {
    const pokemon = await fetchPokemon(id);
    showPokemon(pokemon);
}

document.querySelector(".prev").addEventListener("click", () => {
    if (currentPokemonId > 1) {
        currentPokemonId--;
        loadPokemon(currentPokemonId);
    }
});
document.querySelector(".next").addEventListener("click", () => {
    currentPokemonId++;
    loadPokemon(currentPokemonId);
});

// Inicio
loadPokemon(currentPokemonId);