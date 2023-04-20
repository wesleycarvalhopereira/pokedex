const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" onclick="mostrarDetalhes(${pokemon.number})">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function showPokemonDetails(pokemon) {
    return`
        <li class="pokemon ${pokemon.type}" onclick="mostrarDetalhes(${pokemon.number})">
            <div class="detail">
                <div class="conteiner-cardmaster">
                    <div class="conteiner-details-cardmaster">
                    <div class="details-cardmaster">
                        <span class="name">${pokemon.name}</span>
                        <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                    </div>
                        <span class="number">#${pokemon.number}</span>
                    </div>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </div>
        </li>
    `
}

function showPokemonListAlternativo() {
    document.getElementById("pokemonList").style.display = "none";
    document.getElementById("pokemonListAlternativo").style.display = "block";
}

document.getElementById("loadMoreButton").addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        pokeApi.getPokemons(offset, newLimit).then((pokemons = []) => {
            const newHtml = pokemons.map(convertPokemonToLi).join('')
            pokemonList.innerHTML += newHtml
            loadMoreButton.parentElement.removeChild(loadMoreButton)
        })
    } else {
        pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
            const newHtml = pokemons.map(convertPokemonToLi).join('')
            pokemonList.innerHTML += newHtml
        })
    }
})

pokemonList.addEventListener("click", showPokemonListAlternativo); 
