"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _WeatherController = require('./app/controllers/WeatherController'); var _WeatherController2 = _interopRequireDefault(_WeatherController);

const routes = new (0, _express.Router)();

routes.get('/buscar/:city', _WeatherController2.default.getPokemon);

exports. default = routes;
