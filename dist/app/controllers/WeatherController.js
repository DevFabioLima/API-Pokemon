"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _PokemonUseCase = require('../services/PokemonUseCase'); var _PokemonUseCase2 = _interopRequireDefault(_PokemonUseCase);
var _WeatherUseCase = require('../services/WeatherUseCase'); var _WeatherUseCase2 = _interopRequireDefault(_WeatherUseCase);

class WeatherController {
  async getPokemon(req, res) {
    const temp = await _WeatherUseCase2.default.getTemp(req.params.city);
    if (temp === 'Error') {
      return res.status(400).json({ messagem: 'City not found' });
    }
    const pokemonType = await _PokemonUseCase2.default.getPokemons(temp.typePokemon);
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
exports. default = new WeatherController();
