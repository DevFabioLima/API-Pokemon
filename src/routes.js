import { Router } from 'express';
import PokemonController from './app/controllers/PokemonController';
import WeatherController from './app/controllers/WeatherController';

const routes = new Router();

routes.get('/pokemon/:city', PokemonController.getPokemons);
routes.get('/clima/:city', WeatherController.getCity);
export default routes;
