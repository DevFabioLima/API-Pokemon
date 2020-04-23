const axios = require('axios');

class PokemonUseCase {
  async getPokemons(typeOfPokemon) {
    try {
      const response = await this.getPokemonsFromApi(typeOfPokemon);

      const responseFormatted = this.getUrlsAndNames(response.data.pokemon);

      const magicNumber = this.getMagicNumber(responseFormatted.length);

      const pokemonFromMagicNumber = responseFormatted[magicNumber];
      const imageFromPokemon = await this.getImagePokemon(
        pokemonFromMagicNumber.url
      );
      pokemonFromMagicNumber.url = imageFromPokemon.data.sprites.front_default;
      return pokemonFromMagicNumber;
    } catch (error) {
      return 'Error';
    }
  }

  getUrlsAndNames(pokemons) {
    return pokemons.map((item) => {
      return { name: item.pokemon.name, url: item.pokemon.url };
    });
  }

  getMagicNumber(number) {
    return Math.floor(Math.random() * number);
  }

  async getPokemonsFromApi(type) {
    const pokemons = await axios.get(`https://pokeapi.co/api/v2/type/${type}/`);

    return pokemons;
  }

  async getImagePokemon(url) {
    const imagem = await axios.get(url);
    return imagem;
  }
}

module.exports = new PokemonUseCase();
