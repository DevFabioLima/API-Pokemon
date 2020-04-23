import { Router } from 'express';

import WeatherController from './app/controllers/WeatherController';

const routes = new Router();

routes.get('/buscar/:city', WeatherController.getPokemon);

export default routes;
