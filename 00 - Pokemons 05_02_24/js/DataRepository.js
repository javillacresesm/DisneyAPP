class DataRepository {
    async fetchPokemon(pokemonId) {
        const response = await fetch(`postgre.ctmyk2qy21vm.us-east-1.rds.amazonaws.com`);
        if (!response.ok) { 
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();/*quitar await*/
    }
}
