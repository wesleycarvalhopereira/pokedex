function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${convertPokemonTypesToLi(pokemon.types).join('')}
                </ol>
                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
            </div>                
        </li>
    `
}

const pokemonList = document.getElementById('pokemonsList')

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('') 
    pokemonList.innerHTML += newHtml
})


// const pokemonList = document.getElementById('pokemonList')
// const loadMoreButton = document.getElementById('loadMoreButton')

// const maxRecords = 151


// function loadPokemonItens(offset, limit) {
//     pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
//         const newHtml = pokemons.map(convertPokemonToLi).join('')
//         pokemonList.innerHTML += newHtml
//     })
// }

// loadPokemonItens(offset, limit)

// loadMoreButton.addEventListener('click', () => {
//     offset += limit
//     const qtdRecordsWithNexPage = offset + limit

//     if (qtdRecordsWithNexPage >= maxRecords) {
//         const newLimit = maxRecords - offset
//         loadPokemonItens(offset, newLimit)

//         loadMoreButton.parentElement.removeChild(loadMoreButton)
//     } else {
//         loadPokemonItens(offset, limit)
//     }
// })