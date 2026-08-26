import pokemon from "../models/pokemon.js"

const API_URL = "https://pokeapi.co/api/v2/pokemon/"

export async function fetchPokemon(id) {
    try {
        const response = await fetch(API_URL + id)
        if (!response.ok) throw new Error("Network response was not ok")
        const data = await response.json()

        const types = data.types.map(typeInfo => typeInfo.type.name)
        const abilities = data.abilities.map(abilityInfo => abilityInfo.ability.name)
        const stats = data.stats.map(statInfo => ({
            name: statInfo.stat.name,
            value: statInfo.base_stat
        }))

        return new pokemon(
            data.id,
            data.name,
            types,
            data.sprites.other["official-artwork"].front_default,
            data.height,
            data.weight,
            abilities,
            stats
        )
    } catch (error) {
        console.error("Error fetching Pokemon:", error)
        return null
    }
}