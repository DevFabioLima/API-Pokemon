import axios from 'axios';

class PokemonController {
  /* filterPokemons(pokemons) {
    return pokemons.filter((item) => {
      return { name: item.pokemon.name, url: item.pokemon.url };
    });
  } */

  async getPokemons(req, res) {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/type/electric`
      );
      const responseFormatted = response.data.pokemon.map((item) => {
        return { name: item.pokemon.name, url: item.pokemon.url };
      });
      const magicNumber = Math.floor(Math.random() * responseFormatted.length);
      const pokemon = responseFormatted[magicNumber];
      const pokemonOk = await axios.get(pokemon.url);
      pokemon.url = pokemonOk.data.sprites.front_default;
      return res.json(pokemon);
    } catch (error) {
      console.log(error);
    }
  }
}
export default new PokemonController();
