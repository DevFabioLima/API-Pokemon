import PokemonUseCase from '../services/PokemonUseCase';
import WeatherUseCase from '../services/WeatherUseCase';

class WeatherController {
  async getPokemon(req, res) {
    const temp = await WeatherUseCase.getTemp(req.params.city);
    if (temp === 'Error') {
      return res.status(400).json({ messagem: 'City not found' });
    }
    const pokemonType = await PokemonUseCase.getPokemons(temp.typePokemon);
    if (pokemonType === 'Error') {
      return res.status(400).json({ messagem: 'Pokémon not found' });
    }
    const pokemon = {
      raining: temp.raining,
      temp: temp.temp,
      name: pokemonType.name,
      url: pokemonType.url,
      type: temp.typePokemon,
      city: req.params.city,
    };

    return res.json(pokemon);
  }
}
export default new WeatherController();
