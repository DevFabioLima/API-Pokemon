const axios = require('axios');

class WeatherUseCase {
  async getTemp(city) {
    const tempCity = await this.getWeatherCity(city);

    try {
      const celsius = this.getCelsiusOfKelvin(tempCity.data.main.temp);

      const weatherCity = {
        raining: tempCity.data.weather[0].main,
        temp: celsius,
      };
      const typePokemon = this.getTypePokemon(weatherCity);
      const result = {
        raining: weatherCity.raining,
        temp: celsius,
        typePokemon,
      };

      return result;
    } catch (err) {
      return 'Error';
    }
  }

  getTypePokemon(weather) {
    if (weather.raining === 'Rain') {
      return 'electric';
    }
    if (weather.temp < 5) {
      return 'ice';
    }
    if (weather.temp >= 5 && weather.temp < 10) {
      return 'water';
    }
    if (weather.temp >= 12 && weather.temp < 15) {
      return 'grass';
    }
    if (weather.temp >= 15 && weather.temp < 21) {
      return 'ground';
    }
    if (weather.temp >= 23 && weather.temp < 27) {
      return 'bug';
    }
    if (weather.temp >= 27 && weather.temp <= 33) {
      return 'rock';
    }
    if (weather.temp > 33) {
      return 'fire';
    }
    return 'normal';
  }

  getCelsiusOfKelvin(kelvin) {
    return parseInt(kelvin - 273.15, 0);
  }

  async getWeatherCity(city) {
    const keyApi = '0c9a86641506b0e4c622d5c3f3c859cf';
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&lang=pt_br`
      );

      return response;
    } catch (err) {
      return err;
    }
  }
}
module.exports = new WeatherUseCase();
